import {React,useEffect,useState, useMemo} from 'react'
import Trivia from './Trivia';
import Timer from './Timer';
import Start from './Start';
import Replay from './Replay';

function Quiz() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('R 0');
  const data = [ //Questions and answers arrays
    {
      id:1, 
      question: 'Who was the mother of Jesus?',
      answers: [
        {
          text:'Mary',
          correct: true,
        
        },
        {
          text:'Ruth',
          correct: false,
        
        },
        {
          text:'Hannah',
          correct: false,
        
        },
        {
          text:'Eve',
          correct: false,
        
        },
        
      ],

    },

    {
      id:2, 
      question: 'What is the first Book in the Bible?',
      answers: [
        {
          text:'Genesis',
          correct: true,
        
        },
        {
          text:'Mark',
          correct: false,
        
        },
        {
          text:'Corinthians',
          correct: false,
        
        },
        {
          text:'Psalms',
          correct: false,
        
        },
        
      ],

    },
    {
      id:3, 
      question: 'Whose example does Paul say Christians should follow in Ephesians 5?',
      answers: [
        {
          text:'The prophets',
          correct: false,
        
        },
        {
          text:'Abraham',
          correct: false,
        
        },
        {
          text:'Christ',
          correct: true,
        
        },
        {
          text:'Our parents',
          correct: false,
        },
        
      ],

    },
    {
      id:4, 
      question: 'What tribe is Paul from?',
      answers: [
        {
          text:'Judah',
          correct: false,
        
        },
        {
          text:'Benjamin',
          correct: true,
        
        },
        {
          text:'Manasseh',
          correct: false,
        
        },
        {
          text:'Reuben',
          correct: false,
        
        },
        
      ],

    },
    
    {
      id:6, 
      question: 'Who recognised Jesus as the Messiah whe He was presented at the temple as a baby?',
      answers: [
        {
          text:'Methuselah',
          correct: false,
        
        },
        {
          text:'Zachariah',
          correct: false,
        
        },
        {
          text:'John the Baptist',
          correct: false,
        
        },
        {
          text:'Simeon',
          correct: true,
        
        },
        
      ],

    },
  ]
//Array of prize amounts. Used useMemo hook 'to keep expensive, resource intensive functions from needlessly running'.(W3schools)
  const moneyPyramid = useMemo (()=>
    [
      {id:1, amount: 'R 1000'},
      {id:2, amount: 'R 2000'},
      {id:3, amount: 'R 6000'},
      {id:4, amount: 'R 12000'},
      {id:5, amount: 'R 24000'},
      {id:6, amount: 'R 48000'},
      {id:7, amount: 'R 96000'},
      {id:8, amount: 'R 192000'},
      {id:9, amount: 'R 384000'},
      {id:10, amount: 'R 768000'},
    ].reverse(), //Reverse order of prizes for smallest amount to be at the bottom
  []
  ); 

  useEffect(()=>{/*Amount won should be proprortinate to the number of questions answered correctly 
    and update/select amount on the pyramid*/
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber -1).amount);
  },[questionNumber, moneyPyramid]);
  return (
    <div className='quiz'>
      {!username ? (
         <Start setUsername={setUsername}/>
      ) : (
        <>
        <div className='main'>
        {stop ? (
         <>
        <h1 className='outcome'>You earned: {earned}</h1> 
        
        <h3 className='outcome'><Replay/></h3>
        </>
        ) : ( 
     <>    
        <div className='top'>
          <div className='timer'><Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className='bottom'>
          {/*When time is up then the answer is set to wrong and updates question to next one*/ }
          <Trivia data ={data} 
          setStop ={setStop}
          questionNumber={questionNumber} 
          setQuestionNumber={setQuestionNumber}
          />
          </div>
          </> 
          )}
      </div>
      <div className='pyramid'>
      <ul className='winAmounts'>
        {moneyPyramid.map((m) => ( 
          //Correct question number to match the amount to be won 
          <li className={questionNumber === m.id ? 'amountItem active' : 'amountItem'}>
          <span className='amountItemNumber'>{m.id}</span>
          <span className='amountItemMoney'>{m.amount}</span>
          </li>
        ))}
        
        
      </ul>
      </div>
        </>
     )}
      
      
    </div>
  );
}

export default Quiz;