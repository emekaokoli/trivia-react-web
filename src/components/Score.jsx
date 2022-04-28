import React, { useEffect } from 'react';
import Proptypes from 'proptypes';
import '../styles/score.styles.css';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetQuiz } from '../redux/quiz.redux.slice';
import useCorrectAnswer from '../utils/useCorrectAnswer';
import QuestionList from './questionList';

export default function Score() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { questions, questionsReponse } = useSelector((state) => ({
    questions: state.questions,
    questionsReponse: state.questionsReponse,
  }));

  const correctAnswer = useCorrectAnswer(questions, questionsReponse);

  useEffect(() => {
    navigate('/score');
  }, [navigate]);

  const totalQuestions = questions?.length || 10;
  return (
    <div className='score-container mx-auto text-center'>
      <div className='score-inner-container'>
        <div className='score-cetegory'>You scored</div>
        <p>
          {correctAnswer} {' / '} {totalQuestions}
        </p>
      </div>
      <div className='score-button-inner-container'>
        <div className='question-list'>
          <QuestionList />
        </div>
      </div>
      <div className='score-button-container'>
        <Button
          size='sm'
          variant='secondary'
          onClick={() => {
            dispatch(resetQuiz());
            navigate('/');
          }}
        >
          PLay Again?
        </Button>
      </div>
    </div>
  );
}

Score.propTypes = {
  questions: Proptypes.arrayOf(Proptypes.string),
  questionsReponse: Proptypes.arrayOf(
    Proptypes.objectOf(Proptypes.string)
  ),
};
