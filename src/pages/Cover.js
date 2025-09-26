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
        <div class="cover__text text-name">배 준 용  &nbsp; & &nbsp;  최 하 은</div>
        <div class="cover__text text-time">2026.05.16 SAT PM 01:00</div>
        <div class="cover__text text-location">트라디노이</div>
      </div>
    </div>
  )
}

export default Cover
