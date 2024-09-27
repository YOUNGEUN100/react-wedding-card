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
        <FamilyInfo dad="김아빠" mom="박엄마" child="김신랑" relation="의 차남" />
        <FamilyInfo dad="이아빠" mom="우엄마" child="이신부" relation="의 장녀" />
        <button className='invitation__btn-contact' onClick={openModal}>연락하기</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation
