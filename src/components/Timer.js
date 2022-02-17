import { useEffect, useState } from 'react'

export default function Timer({setStop,questionNumber}) {
    const [timer, setTimer] = useState(30);
    //Timer set to decrease every 1sec from 30sec
    useEffect(()=>{
        if(timer ===0)return setStop(true);
        const interval = setInterval(()=>{
    setTimer((prev)=>prev - 1);      
        },1000);
        return() => clearInterval(interval);
    },[setStop, timer]);
  useEffect(()=>{
    setTimer(30);
  },[questionNumber]);
  return timer;
}

/*Sources used in this task include Hyperiondev Notes, previous tasks, Stackoverflow, You Tube, Reactjs.org and GeeksforGeeks */