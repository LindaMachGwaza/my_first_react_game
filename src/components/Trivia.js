import React, { useEffect, useState } from 'react';

function Trivia({ data, setStop, questionNumber, setQuestionNumber,

}) {
//Define useStates
    const [question, setQuestion] =useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');

    useEffect(() => { //show first question
        setQuestion(data[questionNumber -1]);
    },[data, questionNumber]);

    const delay = (duration, callback) =>{
        setTimeout(()=>{
            callback()
        }, duration);
    }
    //update when answer is selected
    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName('answer active');
        delay(3000, ()=>//Wait for 3seconds before running if answer is correct or not
            setClassName(a.correct ? 'answer correct' : 'answer wrong')

         );
         delay(6000, ()=>//After animation runs for 3 seconds then wait for 6s before showing if answer is correct or not
            {
                if(a.correct){
                    setQuestionNumber((prev)=>prev + 1);
                    setSelectedAnswer(null);
                }else{
                    setStop(true);
                }
            });
        
        };
  return (
    <div className='trivia'><h1>Let's test your Bible knowledge🤑!!</h1>
    <p>Choose the correct answer before time is out.</p>
    <div className='question'>{question?.question}</div>
    <div className='answers'> {/*Display the question and it's answers */}
        {question?.answers.map((a) => ( //When answer is selected it should be highlighted
            <div className={selectedAnswer === a ? className : 'answer'} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
        
        
    </div>
    </div>
  );
}

export default Trivia;

/*Sources used in this task include Hyperiondev Notes, previous tasks, Stackoverflow, You Tube, Reactjs.org and GeeksforGeeks */