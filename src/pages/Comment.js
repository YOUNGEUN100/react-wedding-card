import React, {useState, useEffect} from 'react'
import db from '../firebase-config'; // Adjust the path as necessary
import { collection, addDoc, getDocs, doc, deleteDoc, Timestamp,query,orderBy } from 'firebase/firestore';

function Comment() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [comItemList, setComItemList] = useState([]);
    const max_name_length = 10;
    const max_password_length = 10;
    const max_text_length = 300;
    
    // 모달 및 삭제를 위한 상태 관리
    const [showModal, setShowModal] = useState(null);
    const [deletePassword, setDeletePassword] = useState('');
    const [commentToDelete, setCommentToDelete] = useState(null);

    const [visibleComments, setVisibleComments] = useState(5);
    const [isExpanded, setIsExpanded] = useState(false); // 댓글 목록이 확장되었는지 여부를 추적

     // 댓글 "더보기" 또는 "닫기" 버튼 클릭 처리
     const toggleCommentsVisibility = () => {
        if (isExpanded) {
            // 현재 확장된 상태이면, 초기 상태(5개 댓글)로 복귀
            setVisibleComments(5);
            setIsExpanded(false);
        } else {
            // 현재 축소된 상태이면, 모든 댓글을 표시
            setVisibleComments(comItemList.length);
            setIsExpanded(true);
        }
    };

    // 댓글 삭제
    const deleteComment = async (id, originalPassword) => {
        if (deletePassword !== originalPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        await deleteDoc(doc(db, "comItem", id));
        setComItemList(comItemList.filter(comment => comment.id !== id));
        setShowModal(null); // 모달 숨기기
        setDeletePassword(''); // 비밀번호 입력 필드 초기화
        alert('메시지가 삭제되었습니다.');
    };

    // 날짜 형식 변환
    const formatDate = (date) => {
        const d = new Date(date);
        const month = `${d.getMonth() + 1}`.padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = `${d.getDate()}`.padStart(2, '0');
        return `${month}월 ${day}일`;
    };

    // 댓글 데이터 마운트
    useEffect(() => {
        const fetchComments = async () => {
            const querySnapshot = await getDocs(query(collection(db, "comItem"), orderBy("date", "desc")));
            const comments = querySnapshot.docs.map(doc => ({ 
                id: doc.id,
                 ...doc.data(), 
                 date: formatDate(doc.data().date.toDate()) // 날짜 포맷 변경
            }));
            setComItemList(comments);
        };
        fetchComments();
    }, []);

    // 댓글 등록
    const onCommentSubmit = async () => {

        if (name === '' || name === '' || message === '') {
            alert("항목을 입력해주세요.");
            return; 
        }

        try {
            const docRef = await addDoc(collection(db, "comItem"), {
                name: name,
                password: password, // Reminder: Consider security implications
                message: message,
                date: Timestamp.fromDate(new Date()), // Use Firestore Timestamp
            });

             // Reset form fields
            setName('');
            setPassword('');
            setMessage('');

            // Update local state with new comment for immediate UI update
            setComItemList([...comItemList, {
                id: docRef.id,
                name: name,
                password: password,
                message: message,
                date: formatDate(new Date()),
            }]);
             // Provide feedback to the user
            alert('방명록이 등록되었습니다.');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('방명록 등록이 실패했습니다. 다시 시도해주세요.');
        }
    };



  return (
    <div className='bc-pink container'>
        <div className='title'>방명록</div>
        <div className='commment_content'>
            <div>
                <input 
                    type="text" 
                    value={name} 
                    placeholder='이름' 
                    onChange={(e) => setName(e.target.value)} 
                    maxLength={max_name_length}
                />
                <input 
                    type="password" 
                    value={password} 
                    placeholder='비밀번호'
                    onChange={(e) => setPassword(e.target.value)} 
                    maxLength={max_password_length}
                />
            </div>
            <textarea 
                className='comment__message'
                value={message} 
                placeholder='축하메시지'
                onChange={(e) => setMessage(e.target.value)} 
                maxLength={max_text_length}
            />
            <button className='comment__btn' onClick={onCommentSubmit}>메시지 작성하기</button>
        </div>
        {/* <div className='comment__line'></div> */}
        <div className='comment__container-data'>
                {comItemList.slice(0, visibleComments).map((commentItem) => (
                    <div className='comment__data' key={commentItem.id}>
                        <div className='comment__data-p'>
                            <div>{commentItem.name}</div>
                            <div className='comment__data-pp'>
                                <div className='comment__date'>{commentItem.date}</div>
                                <button 
                                className="comment__btn-close"
                                onClick={() => {
                                    setShowModal(showModal === commentItem.id ? null : commentItem.id);
                                    setCommentToDelete({id: commentItem.id, password: commentItem.password});
                                         }}>&times;</button>
                            </div>
                        </div>
                        <div className='comment__data-com'>{commentItem.message}</div>
                        { showModal === commentItem.id && (
                            <div className='comment__password'>
                                <input 
                                        type="password" 
                                        placeholder='비밀번호 입력'
                                        value={deletePassword} 
                                        onChange={(e) => setDeletePassword(e.target.value)}
                                    />
                                <button 
                                    onClick={() => deleteComment(commentToDelete.id, commentToDelete.password)}
                                >삭제</button>
                            </div>
                            )}
                    </div> 
                ))}
                {comItemList.length > 5 && (
                    <button onClick={toggleCommentsVisibility} className='comment__btn-more'>
                        {isExpanded ? '닫기' : '더보기'}
                    </button>
                )}
        </div>
    </div>
  )
}

export default Comment
