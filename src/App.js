import React , {useState} from 'react';


export default function App() {

  const questions = [
    {
      questionText : 'What is the capital of france',
      answerOptions : [
        {answerText : 'New York' , isCorrect : false},
        {answerText : 'London' , isCorrect : false},
        {answerText : 'Paris' , isCorrect : true},
        {answerText : 'Dublin' , isCorrect : false},
      ],
    },
    {
      questionText : 'Who is CEO of Tesla?',
      answerOptions : [
        {answerText : 'Jeff Bezos' , isCorrect : false},
        {answerText : 'Elon Musk' , isCorrect : true},
        {answerText : 'Bill gates' , isCorrect : false},
        {answerText : 'Tony Stark' , isCorrect : false},
      ],
    },
    {
      questionText : 'The iphone was created by which company?',
      answerOptions : [
        {answerText : 'Apple' , isCorrect : true},
        {answerText : 'Intel' , isCorrect : false},
        {answerText : 'Amazon' , isCorrect : false},
        {answerText : 'Microsoft' , isCorrect : false},
      ],
    },
    {
      questionText : 'How many harry potter games are there?',
      answerOptions : [
        {answerText : 1 , isCorrect :false},
        {answerText : 4, isCorrect : false},
        {answerText : 6, isCorrect : false},
        {answerText : 7, isCorrect : true},
      ],
    }
  ]

   const [currentQuestion , setCurrentQuestion] = useState(0);

   const [showScore , setShowScore] = useState(false);

   const handleAnswerButtonClick = () =>{
    const nextQuestion = currentQuestion + 1;
    if(currentQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
    
   };
  return (
   <div className='app'>
    {/*HINT : replace "false" with logic to display the score when the user has answered all the 
    questions */}
    {showScore ? (  <div className='score-section'>You scored 1 out of {questions.length} </div> )
    :(
      <>
        <div className='question-section'>
          <div className='question-text'>{questions[currentQuestion].questionText} </div>
        </div>
        <div className='answer-section'>
           {questions[currentQuestion].answerOptions.map((answerOptions) => (
            <button onClick={handleAnswerButtonClick}>{answerOptions.answerText}</button>
    ))}
        </div>
      </>
    )
    }
   </div>
  );
}


