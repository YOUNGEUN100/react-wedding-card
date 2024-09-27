import React, { useState } from 'react';
import '../css/Quiz.css';

const questions = [
    {
      questionText: '신혼여행지로 올바른 곳은?',
      correctAnswer: '저희는 영국, 스페인으로 여행갑니다.',
      answerOptions: [
        { answerText: '호주', isCorrect: false },
        { answerText: '캐나다', isCorrect: false },
        { answerText: '스위스', isCorrect: false },
        { answerText: '영국', isCorrect: true },
        { answerText: '스페인', isCorrect: true },
      ],
    },
    {
      questionText: '함께 여행한 국가가 아닌 곳은?',
      correctAnswer: '베트남은 함께 간 적이 없습니다.',
      answerOptions: [
        { answerText: '일본', isCorrect: false },
        { answerText: '홍콩', isCorrect: false },
        { answerText: '마카오', isCorrect: false },
        { answerText: '라오스', isCorrect: false },
        { answerText: '베트남', isCorrect: true },
      ],
    },
    {
      questionText: '함께 하지 않은 활동은?',
      correctAnswer: '롯데월드는 함께 간 적이 없어요. 경주월드, 이월드, 디즈니랜드는 함께 갔습니다.',
      answerOptions: [
        { answerText: '마라톤 10km 뛰기', isCorrect: false },
        { answerText: '한라산 등산하기', isCorrect: false },
        { answerText: '만리포해수욕장에서 서핑하기', isCorrect: false },
        { answerText: '롯데월드에서 놀이기구 타기', isCorrect: true },
        { answerText: 'PC방에서 게임하기', isCorrect: false },
      ],
    }
  ];


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);


    const handleAnswerButtonClick = (correctAnswer, isCorrect, index) => {
        const nextQuestion = currentQuestion + 1;
        setSelectedOptionIndex(index);
    
        if (isCorrect) {
          setScore(score + 1);
          setAnswerFeedback(`정답입니다!`);
        } else {
          setAnswerFeedback(`틀렸습니다! ${correctAnswer} `);
        }
    
        setTimeout(() => {
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
          setAnswerFeedback(null);
          setSelectedOptionIndex(null);
        }, 3000);
      };

      const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedOptionIndex(null);
      };

  return (
    <div className='container bc-pink'>
        <div className='title'>깜짝 퀴즈</div>
        {showScore ? (
        <div className='score-section'>
          <div>{questions.length} 문제 중에 <span className='my-score'>{score} 문제</span> 맞혔습니다! </div>
          <button onClick={handleRestart} className='restart-button'>다시하기</button> 
        </div>
        ) : (
            <>
            <div className='question-section'>
                <div className='question-count'>
                <span>문제 {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  <div>신랑♥신부</div>
                  <div>{questions[currentQuestion].questionText}</div>
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                    className={`answer-button ${selectedOptionIndex === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerButtonClick(questions[currentQuestion].correctAnswer, answerOption.isCorrect, index)}
                    key={index}
                >
                    {answerOption.answerText}
                </button>
                ))}
            </div>
            {answerFeedback && <div className='feedback'>{answerFeedback}</div>}
            </>
        )}
    </div>
  )
}

export default Quiz