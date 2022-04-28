import React from 'react';
import '../styles/intro.styles.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Loading from './helpers/Loading';
import ErrorPage from './helpers/Error';

export default function QuizIntro() {
  let navigate = useNavigate();
  const { isloading, error } = useSelector((state) => ({
    isloading: state.isloading,
    error: state.error,
  }));

  if (isloading) return <Loading />;
  if (error) return <ErrorPage />;
  return (
    <Container className='border intro-container' fluid>
      <Row>
        <Col>
          <div className='intro-row'>
            <h1 className='intro-header' data-testid='intro-header'>
              Welcome to the trivia Challenge
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='intro-sub-title' data-testid='intro-sub-title'>
            You will be prosented with 10 true or false questions
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className='intro-score' data-testid='intro-score'>
            Can you score 100%?
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant='primary'
            onClick={() => {
              navigate('/quiz');
            }}
          >
            Begin
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
