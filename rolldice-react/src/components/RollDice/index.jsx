import { useState } from 'react';
import { Die } from '../Die';

function RollDice() {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [isRolling, setIsRolling] = useState(false);
  const diceValues = ['one', 'two', 'three', 'four', 'five', 'six'];

  const setDiceValues = () => {
    setIsRolling(true)
    setDie1(diceValues[Math.floor(Math.random() * (diceValues.length))]);
    setDie2(diceValues[Math.floor(Math.random() * (diceValues.length))]);
    setTimeout(() => {
      setIsRolling(false)
    }, 400);
  }

  return (
    <div>
      <Die value= { die1 }/>
      <Die value= { die2 }/>

      <button onClick={() => setDiceValues()}>
        { isRolling ? 'Rolling...': 'Roll Dice!'}
      </button>
    </div>
  )
}

export { RollDice }