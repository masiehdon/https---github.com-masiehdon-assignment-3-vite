import { useState } from 'react';

import dice1 from './assets/images/dice-1.png';
import dice2 from './assets/images/dice-2.png';
import dice3 from './assets/images/dice-3.png'; 
import dice4 from './assets/images/dice-4.png'; 
import dice5 from './assets/images/dice-5.png'; 
import dice6 from './assets/images/dice-6.png'; 

function App() {
  

  const diceImages = [
    dice1, dice2, dice3, dice4, dice5, dice6
  ];

 const [image1, setImage1] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[5]);
  



  const diceRoll = function () {
   
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

    setImage1(diceImages[randomNumber1]);
    setImage2(diceImages[randomNumber2]);
    

  };

  return (
    <div>
      <div>
        <div>
        
          <img  src={image1} alt="" />
        </div>
        <div>
     
          <img src={image2} alt="" />
        </div>
      </div>
      <div className='button-container'>
        <button type='button' onClick={diceRoll}>Roll the Dice</button>
      </div>
    </div>
  );
}

export default App;
