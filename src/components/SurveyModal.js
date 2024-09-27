import React, {useState} from 'react'
import db from '../firebase-config'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

function SurveyModal({ closeModal }) {
  const [side, setSide] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [attendance, setAttendance] = useState('참석');
  const [guests, setGuests] = useState(1);
  const [meal, setMeal] = useState('참석');
  const [agree, setAgree] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (agree === false) {
      alert("개인정보 이용 동의에 체크해주세요.");
      return;
    }
     if (side === '' || name === '' || attendance === '') {
      alert("항목을 입력해주세요.");
      return; 
    }

    // '-' 문자를 공백으로 치환
    const formattedContact = contact.replace(/-/g, '');

     // 폼 제출 로직 추가 예정
     addDoc(collection(db, "surveyItem"), {
      side: side,
      name: name,
      contact: formattedContact,
      attendance: attendance,
      guests: guests,
      meal: meal,
      date: new Date(),
    });

    alert('참석 의사가 전달되었습니다.');
    closeModal();
   
  };

  return (
     <div className="survey">
      <div className="survey__content">
      <button onClick={closeModal} className="survey__btn-close">&times;</button>
      <div className='survey__title'>참석 여부 전달하기</div>
        <form onSubmit={handleSubmit}>
          <div className='survey__input'>
            <label>구분</label>
            <button type='button' onClick={()=>setSide('신랑측')} className={`survey__btn-side ${side === '신랑측' ? 'groom' : ''}`}>신랑측</button>
            <button type='button' onClick={()=>setSide('신부측')} className={`survey__btn-side ${side ===  '신부측'? `bride` : ''}`}>신부측</button>
          </div>
          <div className='survey__input'>
            <label>이름</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>연락처</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>참석여부</label>
                <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
                    <option value="참석">참석</option>
                    <option value="불참">불참</option>
                    <option value="미정">미정</option>
                </select>
          </div>
          <div className='survey__input'>
            <label>참석인원</label> 
            <input type="number" min="1" value={guests} placeholder='본인 포함 총 참석인원' onChange={(e) => setGuests(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>식사여부</label> 
            <select value={meal} onChange={(e) => setMeal(e.target.checked)}>
                    <option value="참석">식사함</option>
                    <option value="불참">식사안함</option>
                    <option value="미정">미정</option>
            </select>
          </div>
          <div className='survey__agree'>
            <div className='survey__agree_title'>
              <input type='checkbox' value={agree} onChange={(e) => setAgree(!agree)}>
              </input>개인정보 수집 및 이용 동의(필수)
            </div>
            <div className='survey__agree_content'>
              <div>항목 : 이름, 연락처</div>
              <div>보유기간: 청첩장 이용 종료 시까지</div>
            </div>
          </div>
          <button type="submit" className='survey__btn-submit' onClick={handleSubmit}>제출하기</button>
        </form>
      </div>
    </div>
  )
}

export default SurveyModal
