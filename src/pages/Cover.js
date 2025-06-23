import React, { useState, useRef, useEffect } from 'react'
import mainPhoto from '../images/photo.jpg'
import { TbPlayerTrackPrevFilled, TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import myMusic from '../media/taeyeon_poem.mp3';


function Cover() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(myMusic));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Ensure music starts from the beginning next time
    };
  }, [isPlaying]);

  return (
    <div className="container">
      <div className='image-container'>
        <img className="cover__main-photo" src={mainPhoto} alt='weddingcouple'></img>
        <div class="cover__text text-marry"> We are getting married</div>
        <div class="cover__text text-name">김 신 부  &nbsp; & &nbsp;  이 신 랑</div>
        <div class="cover__text text-time">2026.05.18 SAT PM 01:00</div>
        <div class="cover__text text-location">메종 드 프리미어 그랜드홀</div>
      </div>
    </div>
  )
}

export default Cover
