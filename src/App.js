import React, { useEffect } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { fetchquestions } from './redux/quiz.redux.slice';
import { Routes, Route } from 'react-router-dom';

import QuizIntro from './components/QuizIntro';
import Quiz from './components/Quiz';
import Score from './components/Score';
import NotFound from './components/helpers/NotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchquestions());
  }, [dispatch]);

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<QuizIntro />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
