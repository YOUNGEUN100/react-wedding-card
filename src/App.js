import React, { useState, useEffect } from 'react'
import './App.css';
import './css/FrontCover.css'
import './css/Cover.css'
import './css/Invitation.css'
import './css/Calendar.css'
import './css/Account.css'
import './css/Gallery.css'
import './css/Location.css'
import './css/Footer.css'
import './css/SurveyModal.css'
import './css/Submit.css'
import './css/Comment.css'
import './css/Quiz.css'

import FrontCover from './pages/FrontCover.js'
import Cover from './pages/Cover.js'
import Invitation from './pages/Invitation.js';
import Calendar from './pages/Calendar.js';
// import Contact from './pages/Account.js';
import Location from './pages/Location.js';
import ImgGallery from './pages/ImgGallery.js';
import Footer from './components/Footer.js';
// import SurveyModal from './components/SurveyModal.js';
// import Submit from './pages/Submit.js';
import Comment from './pages/Comment.js';



function App() {

  const [isLoading, setIsLoading] = useState(true); // 시작화면 상태
  const [showContent, setShowContent] = useState(false);

  // const [isModalOpen, setIsModalOpen] = useState(false); // 우선 모달 닫아놓음

  // const closeModal = () => setIsModalOpen(false);
  // const openModal = () => setIsModalOpen(true);

   useEffect(() => {
   
     // 1단계: FrontCover 보여주기
    const timer1 = setTimeout(() => {
      setIsLoading(false); // FrontCover 제거
    }, 4000);

    // 2단계: 페이드인 콘텐츠 보여주기 (FrontCover가 완전히 사라진 후)
    const timer2 = setTimeout(() => {
      setShowContent(true); // 페이드인 클래스 적용된 콘텐츠 렌더
    }, 4000); // 200ms 여유를 줘서 자연스럽게

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, []);

  if (isLoading) {
    return <div><FrontCover /></div> // 시작 컴포넌트만 표시
  } 

  return (
    <div className={`App ${showContent ? "fade-in" : ""}`}>
      {/* {isModalOpen && <SurveyModal closeModal={closeModal} />} */}
      {/* <Submit openModal={openModal}/> */}
      {/* <Contact /> */}
      <Cover/>
      <Invitation />
      <Calendar />
      <Location />
      <ImgGallery />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
