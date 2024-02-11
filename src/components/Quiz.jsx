import { useState } from 'react';
import questions from '../questions.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIdx = userAnswers.length;
  const shuffledAnswers = [...questions[activeQuestionIdx].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  console.log(userAnswers);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{questions[activeQuestionIdx].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((a) => (
            <li key={a} className="answer">
              <button onClick={() => handleSelectAnswer(a)}>{a}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Quiz;
