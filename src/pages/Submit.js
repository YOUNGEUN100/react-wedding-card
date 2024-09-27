import React from 'react'

function Submit({openModal}) {
  return (
    <div className='submit'>
      <div className='submit__title'>참석 의사 전달</div>
        <div className='submit__text'>
            <div>축하의 마음으로 참석해주시는</div>
            <div>모든 분들을 귀하게 모실 수 있도록</div>
            <div>참석 의사를 전달해주세요.</div>
        </div>
        <button onClick={openModal} className='submit__btn'>전달하기</button>
    </div>
  )
}

export default Submit
