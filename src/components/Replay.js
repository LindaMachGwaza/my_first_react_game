import React from 'react'

const Replay = ({playAgain}) => (
  <div className='score-board'>
    
    <button className='playBtn'onClick={playAgain}>
      Play again!
      </button> 
  </div>
);

export default Replay;