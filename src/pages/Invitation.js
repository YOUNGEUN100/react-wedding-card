import React, {useState} from 'react'
import flower from '../images/flower.png'
import ContactModal from '../components/ContactModal';

function Invitation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function FamilyInfo({dad, mom, child, relation}) {
    return (
      <div className='invitation__family'>
          <div className='invitaion__parent'>
              <div>{dad}·{mom}</div>
          </div>
          <div>{relation}</div>
          <div className='invitation__child'>{child}</div>
      </div>
    )
  }
  return (
    <div className='bc-pink container'>
        <img src={flower} className='flower' alt='flower'/>
        <div className='invitation__title'>초대합니다</div>
        <div className='invitation__content'>
          <div>지금까지 소중한 인연을 지켜왔습니다.</div>
          <div>앞으로 남은 인생은 가족이 되어 </div>
          <div>같은 곳을 바라보며</div>
          <div>함께 걷고자 합니다.</div>
          <div>두 사람의 새로운 시작을 </div>
          <div>함께 축복해주시면 감사하겠습니다. </div>
        </div>
        <FamilyInfo dad={process.env.REACT_APP_GROOM_FATHER_NAME} mom={process.env.REACT_APP_GROOM_MOTHER_NAME} child={process.env.REACT_APP_GROOM_NAME} relation={`의 ${process.env.REACT_APP_GROOM_RELATION}`} />
        <FamilyInfo dad={process.env.REACT_APP_BRIDE_FATHER_NAME} mom={process.env.REACT_APP_BRIDE_MOTHER_NAME} child={process.env.REACT_APP_BRIDE_NAME} relation={`의 ${process.env.REACT_APP_BRIDE_RELATION}`} />
        <button className='invitation__btn-contact' onClick={openModal}>연락하기</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation
