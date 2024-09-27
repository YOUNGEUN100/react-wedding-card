import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { LuParkingCircle } from "react-icons/lu";
import { TiCamera } from "react-icons/ti";
import { BiMoviePlay } from "react-icons/bi";
import photobooth from '../images/photobooth.jpg'

const handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=_LQOTGuqY7o'; 
  };

function Information() {
  return (
    <div className='container information'>
        <div className='title'>안내사항</div>
        <div className='Info__contents'>
            <div className='Info__content'>
                <div className='Info__title'><ImSpoonKnife />식사시간</div> 
                <div className='Info__sen'>12:00 ~ 15:00</div>
            </div>
            <div className='Info__content'>
                <div className='Info__title'><LuParkingCircle />주차장</div>
                <div className='Info__sen'>포항시청 주차장을 무료로</div>
                <div className='Info__sen'>이용하시면 됩니다</div>
            </div>
        </div>
    </div>
  )
}

export default Information