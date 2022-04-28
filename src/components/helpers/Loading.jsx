import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className='d-flex justify-content-center'>
    <Spinner animation='grow' variant='info' role='loading' />
  </div>
);

export default Loading;
