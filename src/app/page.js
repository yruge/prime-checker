'use client';
import { useState } from 'react';

import isPrime from './prime-logic.js';


export default function Home() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  }

  function handleCheck() {
    const convertedNum = parseInt(inputValue, 10);
    const check = isPrime(convertedNum);

    if(check)
    {
      alert(`${inputValue} is a prime number.`);
    } 
    else if(!check)
    {
      alert(`${inputValue} is not a prime number.`);
    }
  }


  return (
    <div className='centered-content'>
      <h1>Prime Number Checker</h1>
      <input type="number" value={inputValue} onChange={handleChange} placeholder="Enter a number"/>
      <button type="button" onClick={handleCheck}>Check</button>
    </div>
  );
}
