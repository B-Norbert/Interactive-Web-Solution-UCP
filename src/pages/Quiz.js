import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the reason that you picked University Centre Peterborough?',
			answerOptions: [
				{ answerText: 'Low Fees', isCorrect: true },
				{ answerText: 'Good Location', isCorrect: true },
				{ answerText: 'Wide choice of courses', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Are you interested in accomodation?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Not Sure', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'How do you use your spare time?',
			answerOptions: [
				{ answerText: 'Gaming', isCorrect: true },
				{ answerText: 'Socialising with friends', isCorrect: true },
				{ answerText: 'Exploring', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'How would you plan your studying at home?',
			answerOptions: [
				{ answerText: 'Not study at all', isCorrect: false },
				{ answerText: 'Study a little', isCorrect: false },
				{ answerText: 'Study 2-3 hours a day', isCorrect: true },
				{ answerText: 'Study after each lesson', isCorrect: true },
			],
		},
		{
			questionText: 'How would you prepare for an upcoming exam?',
			answerOptions: [
				{ answerText: 'No studying, would prefare to socialize', isCorrect: false },
				{ answerText: 'Study before the exam', isCorrect: false },
				{ answerText: 'Study 2-3 hours a day ', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is your highest level of school that you have graduated?',
			answerOptions: [
				{ answerText: 'Year 11', isCorrect: false },
				{ answerText: 'College', isCorrect: true },
				{ answerText: 'Sixth Form', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Do you plan on joining any societies at University Centre Peterborough?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Not Sure', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is the reason that you have decided to enroll at a University in general?',
			answerOptions: [
				{ answerText: 'Degree', isCorrect: true },
				{ answerText: 'More working options after graduation', isCorrect: true },
				{ answerText: 'Socializing with people', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What course are you most intersted to study at University Centre Peterborough?',
			answerOptions: [
				{ answerText: 'Accounting and Finance', isCorrect: true },
				{ answerText: 'Criminology', isCorrect: true },
				{ answerText: 'Computing and Information Systems', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Do you live far away from the University Centre Peterborough?',
			answerOptions: [
				{ answerText: 'Local', isCorrect: true },
				{ answerText: '25-50 miles away', isCorrect: true },
				{ answerText: '50+ miles away ', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [result, setResult] = useState();

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

		if (nextQuestion === questions.length && score >= 6) {

			setResult('You are more than capable of studying at a University')
		}else if(nextQuestion === questions.length && score >= 1){

			setResult('You should definitely give University a try')
		}
		else if(nextQuestion === questions.length && score === 0){
			setResult('You might want to think if University is a good option for you.')
		}
	};
	return (
		<body>
			<div className="Banner">
        	<img className="Banner" src="/images/A19_8127 YES.jpg">
            </img>
            <h1>Quiz</h1>
          </div>
		  <div className="App-header-courses">
		  <h1>Not sure if you are ready for University?</h1>
		  <br />
		  <h1>Take this quiz !</h1>
			  <div className='quiz-body'>
				  {showScore ? (
				  <div className='score-section'>
					  You scored {score} out of {questions.length}
					  <br />
					  {result}
					  </div>
					  ) : (
					  <>
					  <div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='button-quiz'onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
		</body>
	);
}
