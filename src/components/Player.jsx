import { useState ,useRef } from "react";




export default function Player() {
  const [enteredPlayerName , setEnteredPlayerName] =useState('');
  const playerName = useRef();

 
  function handelClick(){
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value=''
  }
  return (
    <section id="player">
      <h2>Welcome   { enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text"
        ref={playerName}
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
