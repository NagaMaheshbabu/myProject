import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			question: 'Using Microsoft word we can simply ___',
			answerOptions: [
				{ answerText: 'Paste Picture', isCorrect: false },
				{ answerText: 'Type', isCorrect: false },
				{ answerText: 'Format a text', isCorrect: false },
				{ answerText: ' All the above functions', isCorrect: true },
			],
		},
		{
			question: 'The Binary Coded Decimal (BCD) uses',
			answerOptions: [
				{ answerText: '6 bits', isCorrect: true },
				{ answerText: '8 bits', isCorrect: false },
				{ answerText: '16 bits', isCorrect: false },
				{ answerText: '32 bits', isCorrect: false },
			],
		},
		{
			question: 'Which of the following is billionth of a second?',
			answerOptions: [
				{ answerText: 'Microsecond', isCorrect: false },
				{ answerText: 'Nanosecond', isCorrect: true },
				{ answerText: 'Terabyte', isCorrect: false },
				{ answerText: 'Gigabyte', isCorrect: false },
			],
		},
		{
			question: 'The two kinds of main memory are___',
			answerOptions: [
				{ answerText: 'CDs and DVDs', isCorrect: false },
				{ answerText: 'RAM and Rom', isCorrect: true },
				{ answerText: 'Primary and Secondary', isCorrect: false },
				{ answerText: 'Direct and sequence', isCorrect: false },
              
			],
        },
            {
            
                question:'RAM is also called as',
                answerOptions:[
                    
                        {answerText:' Virtual memory', isCorrect:false},
                        {answerText:'Volatile memory' , isCorrect:true},
                        {answerText:'Non volatile memory',isCorrect:false},
                        {answerText:'Cache memory' , isCorrect:false}
                    
                ],
            
        },
        {
            question:'Internal hard disk is',
            answerOptions:[
                {answerText:'Removable but not fixed' , isCorrect:false},
                  {answerText:'Removable', isCorrect:false},
                 {answerText:'Not fixed', isCorrect:false},
                  {answerText:'Fixed' , isCorrect:true}
              
            ]
        },
        {
            question:'The main memory of computer is also called as',
            answerOptions:[
                {answerText:'Hard-Disk',isCorrect:false},
                {answerText:'Primary storage' , isCorrect:true},
                {answerText:'Secondary storage', isCorrect:false},
                {answerText:'Internal memory',isCorrect:false}
            ],

        },
        {
            question:'How much data can be stored in a CD?',
            answerOptions:[
                {answerText:'300 MB' ,isCorrect:false},
                {answerText:'400 MB' ,isCorrect:false},
                {answerText:'670 MB' ,isCorrect:false},
                {answerText:'700 MB' ,isCorrect:true}

            ]
        },
        {
            question:'CD-ROM stands for',
            answerOptions:[
                {answerText:'Compactable Disc Read Only Memory', isCorrect:false},
                {answerText:'Compact Disc Read Only Memory', isCorrect:false},
                {answerText:'Compactable  Read Only Memory', isCorrect:false},
                {answerText:'Compact Disc Read Only Memory', isCorrect:true},
            ]
        },
        {
            question:'_____ has the shortest access times.',
            answerOptions:[
                {answerText:'Virtual Memory', isCorrect:false},
                {answerText:'Secondary Memory', isCorrect:false},
                {answerText:'Cache Memory', isCorrect:true},
                {answerText:'All of the above Memory', isCorrect:false}
            ]
        }
	
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}