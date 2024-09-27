import React, {useState} from 'react'
import flower from '../images/flower.png'
// import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import Modal from '../components/Modal';
import '../css/Modal.css'

function ContactButton({ person, account, kakaopay }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <div className="contact__box">
          <span>{person}</span>
          <div className="contact__icons">
            <button onClick={openModal} className="contact__btn"><FaMoneyCheck size="1.5em"/></button>
          </div>
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal} who={person} account={account} kakaopay={kakaopay}/>
        )}
      </>
    );
  }


  function Account() {
    const groom_contact = [
      { person: "신랑 김신랑", account: "우리은행 1002-123-456789", kakaopay: "" },
      { person: "아버지 김아빠", account: "우리은행 0123456789", kakaopay: "" },
      { person: "어머니 박엄마", account: "농협은행 0123456789", kakaopay: "" },
    ];

    const bride_contact = [
        { person: "신부 이신부", account: "토스뱅크 1000-0123-4567" , kakaopay: "" },
        { person: "아버지 이아빠", account: "기업은행 0123456789", kakaopay: ""},
        { person: "어머니 우엄마", account: "국민은행 0123456789", kakaopay: "" },
      ];
  
    return (
      <div className="container">
        <img src={flower} className="flower" alt="flower"/>
        <div className='contact__title'>마음 전하는 곳</div>
        <div className="contact__boxes">
          {groom_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__boxes">
          {bride_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__guide-text">아이콘을 클릭하시면 계좌번호를 확인할 수 있습니다.</div>
      </div>
    );
  }

 

export default Account
