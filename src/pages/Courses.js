import '../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Courses() {
  return (
    <body>
    <div className="Banner">
        	<img className="Banner" filter="invert(100%)" src="./images/Students 2.png">
            </img>
          <h1>Courses</h1>
    </div>
    <header className="App-header-courses">
      <h1>List of Courses</h1>
    </header>
    <div className="App">
      <title>Courses</title>
    </div>
      <div class="card-items">
      <div class="card">
        <img class="card-img-top" src="/images/A19_7485 Lecture Theatre.jpg" alt="Card image cap" />
        <h1>Business and Professional</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/Courses/Accounting and Finance">BSc (Hons) Accounting and Finance</Link>
          <Link class="list-group-item" to="/">FdSc Business Management</Link>
          <Link class="list-group-item" to ="/">BA (Hons) Digital Marketing and Communications</Link>
        </ul>
      </div>

      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/A19_7485 Lecture Theatre.jpg" alt="Card image cap" />
        <h1>Social Sciences</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/">BA (Hons) Criminology</Link>
          <Link class="list-group-item" to="/">BA (Hons) English Literature</Link>
          <Link class="list-group-item" to ="/">BA (Hons) History and Archaeology</Link>
        </ul>
      </div>

      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/A19_8654 YES.jpg" alt="Card image cap" />
        <h1>Creative Industries</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/">FdA Digital Arts</Link>
          <Link class="list-group-item" to="/">BA (Hons) Media Production</Link>
          <Link class="list-group-item" to ="/">BA (Hons) Journalism</Link>
        </ul>
      </div>
      </div>
      <div class="card-items">
      <div class="card" style={{width: '18rem' }}>
        <img class="card-img-top" src="/images/A19_8622 YES.jpg" alt="Card image cap" />
        <h1>Education and Teaching</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/">BA (Hons) Education Studies (Top-up)</Link>
          <Link class="list-group-item" to="/">FdA Early Years and Education</Link>
          <Link class="list-group-item" to ="/">FdA Professional Studies (Education)</Link>
        </ul>
      </div>

      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/A19_8725 YES.jpg" alt="Card image cap" />
        <h1>Science and Technology</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/">BSc (Hons) Accounting and Finance</Link>
          <Link class="list-group-item" to="/">FdSc Business Management</Link>
          <Link class="list-group-item" to ="/">BA (Hons) Digital Marketing and Communications</Link>
        </ul>
      </div>

      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/A19_9069 YES.jpg" alt="Card image cap" />
        <h1>Partner Courses</h1>
        <ul class="list-group list-group-flush">
          <Link class="list-group-item" to="/">FdSc Computing and Information Systems</Link>
          <Link class="list-group-item" to="/">BSc (Hons) Computing and Information Systems</Link>
          <Link class="list-group-item" to ="/">HNC Engineering (Mechanical)</Link>
        </ul>
      </div>
      </div>
    </body>
  );
}

export default Courses;
