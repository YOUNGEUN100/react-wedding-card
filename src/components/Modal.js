import React from 'react'

function Modal({ closeModal, who, account, kakaopay }) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("계좌번호가 복사되었습니다.");
      })
      .catch((err) => {
        console.error('클립보드 복사 중 오류가 발생했습니다: ', err);
      });
  };

  return (
      <div className="modal">
        <div className="modal__content">
          <div className='modal__account'>계좌번호</div>
          <div className='atext'>복사 버튼 클릭 시, 복사됩니다.</div>
          <div className='modal__details'>
              <div className='modal_line'>{who}</div>
              <div>{account}</div>
          </div>
          <a href={kakaopay} className='modal__pay-link' role="button">
           카카오페이 송금하기</a>
          <div className='modal__buttons'>
              <button className='modal__btn-copy' onClick={() => copyToClipboard(account)}>복사</button>
              <button className='modal_btn_close' onClick={closeModal}>닫기</button>
          </div>
        </div>
      </div>
    );
}

export default Modal
