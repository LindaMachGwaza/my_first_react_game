import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
        <div className="rule1"><p>TIME TO PLAY! Please enter your name and click Start Game🛫</p></div>
        
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>
        Start Game
      </button>
    </div>
  );
}

/*Sources used in this task include Hyperiondev Notes, previous tasks, Stackoverflow, You Tube, Reactjs.org and GeeksforGeeks */