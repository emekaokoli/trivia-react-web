import React, { useEffect } from 'react';
import Proptypes from 'proptypes';
import '.././styles/quiz.styles.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextQuestionIndex,
  getNextQuestion,
  storeQuestionResponse,
} from '../redux/quiz.redux.slice';

import QuizCard from './QuizCard';
import Score from './Score';

const Quiz = () => {
  const { currentQuestion, nextQuestion } = useSelector((state) => ({
    currentQuestion: state.currentQuestion,
    nextQuestion: state.nextQuestion,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNextQuestion(currentQuestion));
    dispatch(nextQuestionIndex(currentQuestion));
  }, [dispatch, currentQuestion]);

  const handleAnswer = (answer) => {
    dispatch(storeQuestionResponse(answer));
    dispatch(nextQuestionIndex(currentQuestion + 1));
    dispatch(getNextQuestion(currentQuestion + 1));
  };

  return (
    <>
      {nextQuestion && currentQuestion >= 10 ? (
        <Score />
      ) : (
        <div
          className='quiz-container mx-auto text-center'
          id='question-1'
        >
          <QuizCard handleAnswer={handleAnswer} />
        </div>
      )}
    </>
  );
};

Quiz.propTypes = {
  currentQuestion: Proptypes.number,
  nextQuestion: Proptypes.number,
};
export default Quiz;
