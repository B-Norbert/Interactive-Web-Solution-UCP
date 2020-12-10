import '../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Bursaries() {
  return (
    <body>
    <div className="Banner">
        	<img className="Banner" filter="invert(100%)" src="./images/Students 2.png">
            </img>
          <h1>Bursaries</h1>
    </div>
    <div className="overview">
    <p>The following bursary schemes are available to all students starting in 2020/21 or 2021/22 at University Centre Peterborough.</p>
    <h2><strong>Low Income Bursary (£500 per year)</strong></h2>
    <p>If you are from a low income household (under £25,000 per year) and studying a full-time undergraduate course you will receive a<strong> £500 cash bursary</strong> after the end of the first semester for each academic year.</p>
    <p>The low income bursary does not need to be repaid after graduating and is not added to your student loan. Part-time undergraduate students will receive a pro rata payment depending on the number of credits you are studying. You must be in receipt of tuition fee funding from Student Finance to be entitled to the Low Income Bursary.</p>
    <p>In order to be assessed as eligible for the low income bursary students must meet the following criteria:</p>
    <ul>
        <li>New student to UCP enrolling in 2020/21 or 2021/22</li>
        <li>Paying the maximum tuition fee through Student Finance England</li>
        <li>Studying full-time on an UCP/ARU Accredited Undergraduate Degree programme</li>
        <li>Have an assessed household income of under £25,000 from Student Finance England and be in receipt of their financial support</li>
        <li>Fully enrolled and in attendance at the time of each payment</li>
        <li>Have validated bank details registered on our secure system</li>
    </ul>
    <h2><strong>Care Leaver Bursary (£500 per year)</strong></h2>
    <p>The Care Leaver Bursary is to enable students who live in or have lived in care to pursue their studies at UCP. If you are a Care Leaver and studying a full-time undergraduate course you will receive a <strong>£500 cash bursary</strong> for each academic year.</p>
    <p>The Care Leaver bursary does not need to be repaid after graduating and is not added to your student loan. There is no separate application to be assessed if eligible for the Care Leavers bursary. All students will be considered for the bursary based on the information supplied in their course application. Applicants will additionally be required to submit evidence of Care Leaver status.</p>
    <h2><strong>Student Ambassador Bursary (up to £1,000 per year)</strong></h2>
    <p>If you are an undergraduate student, you could receive a tax-free bursary of <strong>up to £1,000 per year</strong> by becoming a Student Ambassador or Student Research Ambassador for University Centre Peterborough.</p>
    <p>The benefits of becoming an Ambassador includes; increasing employability when you graduate, developing personal and presentation skills and inspiring prospective students to go to university.</p>
    </div>
    </body>
  );
}

export default Bursaries;
