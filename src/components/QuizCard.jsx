import React from 'react';
import '.././styles/card.styles.css';
import { Button } from 'react-bootstrap';
import Loading from './helpers/Loading';
import { useSelector } from 'react-redux';
import ErrorPage from './helpers/Error';

export default function QuizCard({ handleAnswer }) {
  const { question, nextQuestion, currentQuestion, isloading, error } =
    useSelector((state) => ({
      question: state.questions,
      nextQuestion: state.nextQuestion,
      currentQuestion: state.currentQuestion,
      isloading: state.isloading,
      error: state.error,
    }));

  if (isloading) return <Loading />;

  if (error) return <ErrorPage />;

  return (
    <div className='card-container'>
      <div className='card-inner-container'>
        <div className='card-cetegory' data-testid='card-cetegory'>
          {nextQuestion?.category}
        </div>
      </div>
      <div className='box mx-auto text-center'>
        <div className='card-question' data-testid='card-question'>
          {nextQuestion?.question}
        </div>
        <div className='card-button-container'>
          <Button
            role='button'
            data-testid='true'
            variant='secondary'
            className='catd-button'
            onClick={() => handleAnswer(nextQuestion.correct_answer)}
          >
            True
          </Button>
          <Button
            id='button'
            role='button'
            data-testid='false'
            variant='secondary'
            className='card-button'
            onClick={() =>
              handleAnswer(nextQuestion.incorrect_answers[0])
            }
          >
            False
          </Button>
        </div>
      </div>
      {currentQuestion} of {question.length}
    </div>
  );
}
