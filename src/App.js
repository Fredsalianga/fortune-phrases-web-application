import logo from './logo.svg';
import './App.css';
import { phrases } from './data/phrases';
import React, { useState } from 'react';
import backgroundImage from './Pictures/boston.jpg';


function App() {
  const [text, setText] = useState("");
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  const handClick = (e) =>{
    const randomNumber = Math.floor(Math.random() * phrases.length);
    console.log(phrases[randomNumber])
    setText(phrases[randomNumber])
    console.log("you clicked")
  }
  return (
    <div className="App">
      <div style={backgroundImageStyle}>
      <div className='textphrase'>{text}</div>
    <button onClick={e => handClick(e)}> Generate a Phrase</button>
    </div>
      
    </div>
  );
}


export default App;
