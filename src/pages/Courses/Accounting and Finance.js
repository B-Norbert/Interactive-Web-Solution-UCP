import '../../App.css';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Accounting() {
  return (
    <body>
    <div className="banner-test">
      <h1>BSc (Hons) Accounting and Finance</h1>
    </div>
      <header className="App-header-courses-info">
        <h1>About this course</h1>
      </header>
      <div className="course_info_border">
      <div className="courses_info">
      <img class="card-img-top" src="/images/A19_7485 Lecture Theatre.jpg" alt="Card image cap" />
        <h3><strong>Key Facts</strong></h3>
        <h6><strong>UCAS Code</strong></h6>
        <p>NN43</p>
        <h6><strong>Institution code</strong></h6>
        <p>P56</p>
        <p><strong>Accredited by</strong> Anglia Rusking University</p>
        <h6><strong>Location</strong></h6>
        <p>Peterborough Campus</p>
        <h6><strong>Duration and Delivery</strong></h6>
        <p><strong>Full-time 3 years</strong> (2 full days a week over two semesters per year)</p>
        <p><strong>Part-time 4 years</strong> (1-2 full days a week over two semesters per year</p>
        <h6><strong>Start Date</strong></h6>
        <p>September 2021</p>
      </div>
      </div>
      <div className="course_overview">
        <p>This course includes a wide range of skills identified by both employers and the Association of Chartered Certified Accountants (ACCA) as being important for accountancy and finance graduates in the 21st century.</p>
          <p>Ethics and sustainable business are covered, as is the ability to communicate effectively both in writing and orally, to work in teams and to be able to think critically and solve problems.</p>
          <p>The teaching and learning includes a diverse and dynamic range of strategies including practical classes and workshops.</p>
          <p>Case studies will be used in some modules to both embed knowledge and understanding, but also to allow students to apply their skills in their analysis and problem solving. In some modules, students will have to justify and reflect upon their business decisions and strategies to a panel of academic and industry experts in a ‘Dragon’s Den’ style scenario.</p>
          <p>Students will be supported to progress through the production of a range of types of outputs that would normally be required in business situations. The development of spreadsheets and use of industry specific software will improve your employability and allow a practical application of knowledge.  This may form a part of a portfolio of the student’s work for assessment purposes. These types of learning experiences have specifically been chosen to emulate the types of experience and skills that are required by industry.</p>
          <p>Students will be encouraged to be active learners whose knowledge and understanding is gained through the support of academic staff, who will act as mentors, rather than ‘lecturers’. Industry specialists are invited to lectures and again they will not be seen purely as ‘guest lecturers’, but as part of the university community.</p>
          <p>The courses at University Centre Peterborough are studied in smaller class sizes compared with other universities, a typical class size is under 30 students.</p>
      </div>
      <div id="accordion">
        <div class="course_card">
                <h2>Course Content</h2>
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#EntryRequirements" aria-expanded="true" aria-controls="EntryRequirements">
                Entry Requirements
              </button>
            </h5>
          </div>
          <div id="EntryRequirements" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
          <p>If you are applying to start in September 2021, you must meet the following entry requirements:</p>
          <p><strong>80 UCAS points</strong> with at least one qualification in an accounting, business, economics, mathematics or statistics related subject:</p>
          <ul>
            <li>A-levels (CDD or BB)</li>
            <li>BTEC (MMP)</li>
            <li>Cambridge Technicals (MMP)</li>
            <li>Access to HE(45 credits)</li>
            <li>AAT Level 3 Diploma in Accounting (Pass)</li>
          </ul>
          <p>Mature students or students who do not have the above qualifications can contact our admissions team on <strong>01733 214466</strong> or <strong>admissions@ucp.ac.uk</strong> to discuss equivalent qualifications or relevant work experience.</p>
          <p>You must have GCSE English language and mathematics at a minimum of grade C or grade 4.</p>
          <p>If English is not your first language you will require a recognised Level 2 English language qualification or an IELTS score of 6.0 (with 5.5 minimum in each skill) or an equivalent English Language qualification.</p>
          <p><strong>EU STUDENTS AND OVERSEAS QUALIFICATIONS</strong></p>
          <p>We can accept a wide range of overseas qualifications and use UK NARIC to compare qualifications. For advice about overseas qualification conversion call the Admissions Office on <strong>01733 214466</strong> or email <strong>admissions@ucp.ac.uk.</strong></p>
          <p><strong>UCAS TARIFF</strong></p>
          <p>To find out more about UCAS tariff points and how they work, visit <strong>ucas.com/tariff-calculator.</strong></p>
          <p>We accept a wide range of qualifications such as A-levels (you must have grades for at least two A-levels), BTEC, Cambridge Technicals, International Baccalaureate (IB), NVQ Level 3, Access to Higher Education and Scottish Advanced Highers.</p>
          <p>The tariff points for qualifications can be added and combined together (e.g. A-levels plus BTECs).</p>
          <p>The UCAS points for A-level General Studies, AS-levels and the EQP (Extended Project Qualification) are accepted when combined with other full qualifications.</p>
          <p><strong>ACCREDITATION OF PRIOR CERTIFICATED LEARNING (APCL) FOR ENTRY</strong></p>
          <p>APCL relates to learning completed through an earlier course of study. If you have previously completed a course which is relevant to your proposed course you should make this clear when you apply. For this to be eligible for consideration you must be able to provide certification, which shows your success in a final assessment for that course. Learning must be completed in the last five years or further evidence of updating will be required. Simple participation in a course or an attendance certificate is not sufficient.</p>
          <p><strong>EXEMPTIONS BASED ON ACCREDITATION OF PRIOR LEARNING (APL)</strong></p>
          <p>We offer students flexibility in their studies, by recognising learning they may have completed elsewhere before they apply. The Accreditation of Prior Learning process ensures that we can take this into account when determining the modules you must study. It is important that you identify any relevant prior learning when you apply. If your previous study specifically relates to modules on the course you wish to undertake we may approve a reduced programme of study, thus shortening the time it takes to obtain your award. Where this relates to learning completed through an earlier course of study, this is called Prior Certificated Learning, and where learning has been achieved through relevant work or experience, this is referred to as Prior Experiential Learning. Claims must be approved before you commence a course.</p>
          <p><strong>EXEMPTIONS BASED ON ACCREDITATION OF PRIOR EXPERIENTIAL CERTIFICATED LEARNING (APEL)</strong></p>
          <p>It is important to understand that the APEL process does not award academic credit for experience alone, but for learning which can be shown to have been achieved through that experience. Students are required to prepare an individual case for the credit arising from their learning experiences. This normally means that a student receives support in the preparation of a portfolio, which evidences their claimed exemptions for entry. This portfolio of evidence is then submitted for assessment and the possible award of academic credit. Alternative methods of assessment of evidence may be available but needs to be discussed with the Admissions team or Course Leader.</p>
          </div>
          </div>
          
          <div class="card-header" id="headingtwo">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Whatyoullstudy" aria-expanded="true" aria-controls="EntryRequirements">
                What You'll Study
              </button>
            </h5>
          </div>
          <div id="Whatyoullstudy" class="collapse " aria-labelledby="headingtwo" data-parent="#accordion">
          <div class="card-body">
            <p>You must take modules worth 120 credits at each level of the course. Each module is worth a specified number of credits.</p>
            <p><strong>Year one for full-time students(Level 4)</strong></p>
            <ul>
              <li>Academic and Business Skills (15 credits)</li>
              <li>Insight into Economics (15 credits)</li>
              <li>Foundations of Financial and Management Accounting (30 credits)</li>
              <li>Financial Fundamentals (15 credits)</li>
              <li>Accounting for Small and Medium Enterprises (15 credits)</li>
              <li>People, Planet and Profits (15 credits)</li>
              <li>Corporate and Business Law (15 credits)</li>
            </ul>
            <p><strong>Year two for full-time students(Level 5)</strong></p>
            <ul>
              <li>Research and Employability Skills (15 credits)</li>
              <li>Company Accounts (15 credits)</li>
              <li>Management Accounting Decision and Control(30 credits)</li>
              <li>Auditing and Internal Controls (15 credits)</li>
              <li>Financial Management (15 credits)</li>
              <li>Project Management Fundamentals (15 credits)</li>
              <li>Personal Taxation (15 credits)</li>
            </ul>
            <p><strong>Final year for full-time students(Level 6)</strong></p>
            <ul>
              <li>Undergraduate Major Project(30 credits)</li>
              <li>Corporate Reporting (15 credits)</li>
              <li>Financial Risk Management (15 credits)</li>
              <li>Corporate Taxation (15 credits)</li>
              <li>Leadership for Sustainability (15 credits)</li>
              <li>Research Skills (15 credits)</li>
              <li>Governance, Risk and Ethics (15 credits)</li>
            </ul>
            <p>A typical 15 credit module is 150 hours which includes 36 hours of tutot led delivery and 114 hours of recommended independent study. 
               A typical 30 credit module is 300hours which includes 72 hours of tutor led delivery and 228 hours of recommended independent study.
               A full-time student should expect to undertake 30 additional hours per week during term-time.</p>
            <ul>
              <li>For details of classification of awards please refer to page 91 of <strong>Academic Regulations.</strong></li>
              <li>For details of progression and module scenarios please refer to page 83 of <strong>Academic Regulations.</strong></li>
              <li>For details of compensation scenarios please refer to page 66 of <strong>Academic Regulations</strong></li>
              <li>For details of assesment offences please refer to page 105 of <strong>Academic Regulations</strong></li>
              <li>For details of how we will inform you of changes to modules please refer to page 2 of the <strong>terms and conditions.</strong></li>
            </ul>
          </div>
          </div>

          <div class="card-header" id="headingthree">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Howyoullstudy" aria-expanded="true" aria-controls="EntryRequirements">
                How You'll Study
              </button>
            </h5>
          </div>
          <div id="Howyoullstudy" class="collapse " aria-labelledby="headingthree" data-parent="#accordion">
          <div class="card-body">
            <p>When studying this course at University Centre Peterborough, we will timetable your lectures as two full days a week over two semesters per year(part-time will be one to two full days a week over two semesters per year).</p>
            <p>We are able to offer this convenient timetabling to our students as we are a smaller institution so we can timetable our staff and resources more efficiently.</p>
            <p>Over the duration of your course, teaching will be delivered by the following methods:</p>
            <p><strong>Year one for full-time students(Level 4)</strong></p>
            <ul>
              <li>40% Lectures</li>
              <li>60% Seminars</li>
            </ul>
            <p><strong>Year two for full-time students(Level 5)</strong></p>
            <ul>
              <li>45% Lectures</li>
              <li>35% Seminars</li>
              <li>20% Workshops</li>
            </ul>
            <p><strong>Final year for full-time students (Level 6)</strong></p>
            <ul>
              <li>45% Lectures</li>
              <li>35% Seminars</li>
              <li>20% Workshops</li>
            </ul>
            <p>There are two semesters per year and each semester is up to 15 weeks which includes up to 12 teaching weeks and 3 assessment weeks.</p>
            <p>If studying full-time you will be in classes, seminars and tutorials for approximately 15 hours per week and will spend the rest of your time in independent study and extra-curricular activities including work placement if not embedded in your course.
               We recommend that full-time students allow an additional 30 hours per week for additional study.</p>
            <p>The campus is open Monday to Friday throughout the year and you will also have 24/7 access to a virtual learning environment (VLE) with e-books, journals and abstracts plus teaching resources and interactive tools.</p>
            <p>Timetables are available at least 6 weeks before registration and you can refer to the <strong>academic calendar</strong>  for examination weeks and resit periods.</p>
            <p>The days of the week you study may change each year and in some circumstances one of the full days might have to be split into two half days, but we aim to keep these as full days where possible.</p>
          </div>
          </div>

          <div class="card-header" id="headingfour">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Howyoullbeassessed" aria-expanded="true" aria-controls="EntryRequirements">
                How You'll Be Assessed
              </button>
            </h5>
          </div>
          <div id="Howyoullbeassessed" class="collapse " aria-labelledby="headingfour" data-parent="#accordion">
          <div class="card-body">
            <p>Throughout the duration of your course you will be assessed by the following methods:</p>
            <p><strong>Year one for full-time students (Level 4)</strong></p>
            <ul>
              <li>75% Coursework</li>
              <li>10% Written Exams</li>
              <li>15% Practical Exams</li>
            </ul>
            <p><strong>Year two for full-time students (Level 5)</strong></p>
            <ul>
              <li>50% Coursework</li>
              <li>40% Written Exams</li>
              <li>10% Practical Exams</li>
            </ul>
            <p><strong>Final year for full-time students (Level 6)</strong></p>
            <ul>
              <li>40% Coursework</li>
              <li>30% Written Exams</li>
              <li>30% Practical Exams</li>
            </ul>
            <p>We will provide, by the beginning of the first week of each semester, a current module guide with all the information you need for each module, including details of assessment tasks, the deadlines for these tasks, the required format and any relevant guidance.</p>
            <p>Formative assessment opportunities are written into all module plans to provide students with on-going feedback.  End of semester assessments will have formative opportunities in weeks 9 or 10 of the semester.  In addition revision sessions will be held in week 12.</p>
            <p>Your final degree classification is calculated as an average of your highest 60 credits at Level 5 and all credits at Level 6.</p>
            <p>70%+ First</p>
            <p>60-69% 2:1</p>
            <p>50-59% 2:2</p>
            <p>40-49% Third</p>
          </div>
          </div>
          
          <div class="card-header" id="headingfive">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Workexperience" aria-expanded="true" aria-controls="EntryRequirements">
                Work Experience
              </button>
            </h5>
          </div>
          <div id="Workexperience" class="collapse " aria-labelledby="headingfive" data-parent="#accordion">
          <div class="card-body">
            <p>As the course is timetabled as full days during the week when studied full-time, this also gives you the flexibility to find a work placement, internship or volunteering opportunity which will improve your employability after you graduate. All students are encouraged to identify work experience to aid their career development.</p>
          </div>
          </div>

          <div class="card-header" id="headingsix">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Futurecareers" aria-expanded="true" aria-controls="EntryRequirements">
                Future Careers For Graduates
              </button>
            </h5>
          </div>
          <div id="Futurecareers" class="collapse " aria-labelledby="headingsix" data-parent="#accordion">
          <div class="card-body">
            <p>Just some of the future careers for graduates after completing the course include:</p>
            <ul>
              <li>Financial Accountant</li>
              <li>Management Accountant</li>
              <li>Auditor</li>
              <li>Company Secretary</li>
              <li>Business Development Manager</li>
              <li>Financial Data Analyst</li>
              <li>Tax Adviser</li>
              <li>Jobs in the banking and financial industries</li>
            </ul>
            <p>You can also continue your development by studying professional qualifications from the Association of Chartered Certified Accountants (ACCA).</p>
          </div>
          </div>

          <div class="card-header" id="headingseven">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Courseleader" aria-expanded="true" aria-controls="EntryRequirements">
                Your Course Leader
              </button>
            </h5>
          </div>
          <div id="Courseleader" class="collapse " aria-labelledby="headingseven" data-parent="#accordion">
          <div class="card-body">
            <p><strong>Chris Pursehouse</strong></p>
            <p>I am the Course Leader for the BSc (Hons) Accounting and Finance and FdA / BA (Hons) Digital Marketing and Communications degrees at University Centre Peterborough.  I have been teaching since 2008 when I joined University Centre Peterborough as a lecturer in Business Studies and became course leader of the Accounting degree in 2012.</p>
            <p>I have worked in the marketing Industry for over 25 years and have experience in the specialist battery, packing and publishing industries in a variety of different marketing roles. I have been responsible for all aspects of the marketing mix and have undertaken international marketing as well. More recently I have undertaken some research for Travelex and CAB.</p>
            <p>My marketing experience led me to develop my interest in photography as I often had to take photos of new products and news stories for the company magazine and website.</p>
            <p><strong>Qualifications</strong></p>
            <ul>
              <li>Postgraduate Degree in Management, University of Northampton</li>
              <li>Masters in Business Administration, University of Northampton</li>
              <li>Diploma in Marketing, Cambridge Regional College</li>
              <li>HND is Business, University of Huddersfield</li>
              <li>Professional Graduate Certificate in Education (PGCE), University of Northampton</li>
            </ul>
          </div>
          </div>

          <div class="card-header" id="headingtwo">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#Howtoapply" aria-expanded="true" aria-controls="EntryRequirements">
                How To Apply
              </button>
            </h5>
          </div>
          <div id="Howtoapply" class="collapse " aria-labelledby="headingtwo" data-parent="#accordion">
          <div class="card-body">
            <p>When you have chosen a course to study at University Centre Peterborough, your next step is to make an application.</p>
            <p>All <strong>FULL-TIME APPLICATIONS</strong> must be made to UCAS via a web-based tracker system - <strong>www.ucas.com</strong> (the institution code for University Centre Peterborough is P56).</p>
            <p>All <strong>PART-TIME APPLICATIONS</strong> can be submitted directly to University Centre Peterborough. You can download and complete the <strong>following form</strong> then email to <strong>admissions@ucp.ac.uk</strong>, or send it through the post, or visit us in person.</p>
            <p>Before you apply, please check that you meet the entry requirement which is listed on the course information pages.</p>
            <p>If you have any questions about making an application contact the Admissions Office on <strong>01733214466</strong> or email <strong>admissions@ucp.ac.uk</strong>.</p>
            <p><strong>When to apply</strong></p>
            <p>We advise you to make an application for your chosen course as soon as possible to secure your place. We will process your application within 1 to 5 working days so you know if you have been successful and received an offer.</p>
            <p>The following timeline is for applications to start a course in September 2021.</p>
            <p><strong>FIRST UCAS DEADLINE</strong></p>
            <ul>
              <li>Applications for the majority of courses will be made by 6pm on <strong>15th January 2021</strong></li>
              <li>This also gives you the opportunity to add University Centre Peterborough as an additional choice if you have used all five choices and are not holding any offers.</li>
            </ul>
            <p><strong>UCAS CLEARING</strong></p>
            <ul>
              <li>From <strong>Monday 5th July 2021</strong> you can apply via UCAS through Clearing.</li>
              <li>Clearing is for those who have not yet applied or students who have waited until they have received their grades. However, you do not need to wait until you receive your grades before applying through Clearing.</li>
              <li>If you have applied and been accepted at another university, you still have the opportunity to change to study at University Centre Peterborough.</li>
              <li>If you don’t get the grades you expected, don’t panic. Just contact us during Clearing and we can  usually confirm your place very quickly. We are used to helping students at this time of year.</li>
            </ul>
            <p><strong>Types of offer</strong></p>
            <p>When you make an application, you will receive one of the following offers:</p>
            <ul>
              <li><strong>CONDITIONAL OFFER:</strong> You will have to meet certain conditions before the start of the course (such as achieving your exams with a certain grade). We will specify these conditions when making you an offer. When you achieve these grades your place will then be confirmed. </li>
              <li><strong>UNCONDITIONAL OFFER:</strong> You already meet the entry requirements for the course (i.e. you have achieved the grades already) and we are happy to offer you a place without conditions.</li>
              <li><strong>DECLINE:</strong> Unfortunately, we are not able to offer you a place at this time. We will advise you why you were unsuccessful on this occasion and we can give you advice on alternative courses for progression.</li>
            </ul>
            <p><strong>Application days</strong></p>
            <ul>
              <li>We will be holding an Applicant Day for new students on <strong> Saturday 20th March 2021.</strong></li>
              <li>This invitation only event is available to students who are holding a Conditional Offer or Unconditional Offer. It will give you the opportunity to meet other students, academic staff and participate in subject sessions to help prepare you before starting in September 2021.</li>
              <li>If you are still deciding on where to study then this day can be a great chance to see if studying with us is right for you.</li>
            </ul>
            <p><strong>Advice Sessions and Open Days</strong></p>
            <ul>
              <li>If you would like help with your application, more information about student finances or have any questions, then you are welcome to book onto one of our regular Advice Sessions where you can speak to a member of staff for help and advice.</li>
              <li>During our Open Days we run a series of talks on a variety of topics including applications and student finance.</li>
              <li>For dates and times of the latest Advice Sessions and Open Days visit <strong>www.ucp.ac.uk/events.</strong></li>
            </ul>
          </div>
          </div>
          <div className="overview">
            <h1>Is this course for you ?</h1>
            <button className='button-apply' >Apply</button>
          </div> 
      </div>
    </div>
  </body>
  );
}

export default Accounting;
