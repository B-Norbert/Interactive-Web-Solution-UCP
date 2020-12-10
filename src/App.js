import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import NotFoundPage from './pages/NotFoundPage.js';
import Footer from './components/Footer';
import Courses from './pages/Courses.js';
import Accounting from './pages/Courses/Accounting and Finance.js'; 
import Quiz from './pages/Quiz.js';
import Fees from './pages/Fees.js';
import Bursaries from './pages/Bursaries.js';

function App() {
  return (
       
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Courses" exact component={Courses} />
          <Route path="/Courses/Accounting and Finance" exact component={Accounting} />
          <Route path="/Quiz" exact component={Quiz} />
          <Route path="/Fees" exact component={Fees} />
          <Route path="/Bursaries" exact component={Bursaries} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
