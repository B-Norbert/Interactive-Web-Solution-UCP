import logo from '../logo.svg';
import '../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Video from '../components/Video';
import News from '../components/News';

function Home() {
  return (
    <div>
                    <Video />
      <header className="App-header">
        <News />
      </header>
    </div>
  );
}

export default Home;
