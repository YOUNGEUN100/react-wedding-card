import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactModal({closeModal}) {

  const groomContact = [
    { person: `신랑 ${process.env.REACT_APP_GROOM_NAME}`, phone: process.env.REACT_APP_GROOM_PHONE },
    { person: `아버지 ${process.env.REACT_APP_GROOM_FATHER_NAME}`, phone: process.env.REACT_APP_GROOM_FATHER_PHONE },
    { person: `어머니 ${process.env.REACT_APP_GROOM_MOTHER_NAME}`, phone: process.env.REACT_APP_GROOM_MOTHER_PHONE },
  ];

  const brideContact = [
    { person: `신부 ${process.env.REACT_APP_BRIDE_NAME}`, phone: process.env.REACT_APP_BRIDE_PHONE },
    { person: `아버지 ${process.env.REACT_APP_BRIDE_FATHER_NAME}`, phone: process.env.REACT_APP_BRIDE_FATHER_PHONE },
    { person: `어머니 ${process.env.REACT_APP_BRIDE_MOTHER_NAME}`, phone: process.env.REACT_APP_BRIDE_MOTHER_PHONE },
  ];


  return (
    <div className="modal">
      <div className="contact__content">
        <button onClick={closeModal} className="survey__btn-close">&times;</button>
        <div className='modal__account'>연락하기</div>
        <div className="contact__boxes">
          {[...groomContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                  <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact__boxes">
        {[...brideContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                    <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
