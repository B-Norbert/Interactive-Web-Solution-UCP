import '../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Fees() {
  return (
    <body>
    <div className="Banner">
        	<img className="Banner" filter="invert(100%)" src="./images/Students 2.png">
            </img>
          <h1>Fees and Finances</h1>
    </div>
    
    <div className="overview">
      <p>Making university affordable is an important factor when choosing where to study.</p>
      <p>University Centre Peterborough offer lower tuition fees compared with other universities and provide a variety of bursaries for all students.</p>
      <h2><strong>Tuition Fees</strong></h2>
      <p>The following tuition fees are for all UK and EU/EEA students starting in 2021/22 at University Centre Peterborough. The course fees for each course are stated on the course information pages on this website. All tuition fees may be subject to an annual inflationary increase.</p>
      <h3><strong>Undergraduate Degrees</strong></h3>
      <ul>
          <li><strong>£8,000 per year</strong> full-time (part-time fees calculated based on credits studied)</li>
      </ul>
      <h3><strong>Higher Nationals (HNC/HND)</strong></h3>
      <ul>
          <li><strong>£6,500 per year</strong> full-time</li>
          <li><strong>£3,250 per year</strong> part-time</li>
      </ul>
      <h3><strong>Bishop Grosseteste University (BGU) Foundation Degrees (Professional Studies)</strong></h3>
      <ul>
          <li><strong>£6,935 per year</strong> full-time</li>
      </ul>
      <h3><strong>Education, Training and Skills (Certificate / Professional Graduate Diploma)</strong></h3>
      <ul>
          <li><strong>£2,500 per year</strong> part-time</li>
      </ul>
      <h3><strong>Diploma in Therapeutic Counselling</strong></h3>
      <ul>
          <li><strong>£2,500 per year</strong> part-time</li>
      </ul>
      <h4><strong>ADDITIONAL COSTS</strong></h4>
      <p>There may be additional costs for the course which are not covered by your tuition fee. Please refer to the course information page for additional costs that relate to your course. Please note that if you fail a unit, you may incur re-sit costs. </p>
      <h4><strong>HE TUITION FEE POLICY</strong></h4>
      <p>The HE tuition fee policy below identifies the fee amounts, fee liability points, procedures for the assessment and our fee appeal process. It is important that you read this document so you understand your rights and responsibilities.</p>
    </div>
    </body>
  );
}

export default Fees;
