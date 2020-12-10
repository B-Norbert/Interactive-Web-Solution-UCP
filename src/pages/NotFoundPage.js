import logo from '../logo.svg';
import '../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function NotFoundPage() {
  return (
    <div>
      <header className="App-header">
        <Alert>Not Found</Alert>
        <Link to="/">
        <Button variant="warning"> Home</Button>
        </Link>
        <Link to="/Contact">
        <Button variant="secondary"> Contact US</Button>
        </Link>
      </header>
    </div>
  );
}

export default NotFoundPage;
