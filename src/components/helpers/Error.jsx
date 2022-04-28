import { Alert } from 'react-bootstrap';

function ErrorPage({ error }) {
  return (
    <Alert className='d-flex justify-content-center' variant='danger'>
      {error}
    </Alert>
  );
}

export default ErrorPage;
