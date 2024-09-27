import React, { useState } from 'react'
import './App.css';

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

import Cover from './pages/Cover.js'
import Invitation from './pages/Invitation.js';
import Calendar from './pages/Calendar.js';
import Contact from './pages/Account.js';
import Location from './pages/Location.js';
import ImgGallery from './pages/ImgGallery.js';
import Footer from './components/Footer.js';
import SurveyModal from './components/SurveyModal.js';
// import Submit from './pages/Submit.js';
import Comment from './pages/Comment.js';
import Quiz from './pages/Quiz.js';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false); // 우선 모달창 닫아놓음
  
    // 모달을 닫기 위한 함수
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const openModal = () => {
      setIsModalOpen(true);
    }

  return (
    <div className="App">
      {isModalOpen && <SurveyModal closeModal={closeModal} />}
      <Cover/>
      <Invitation />
      <Calendar />
      <ImgGallery />
      <Location />
      {/* <Submit openModal={openModal}/> */}
      <Quiz/>
      <Contact />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
