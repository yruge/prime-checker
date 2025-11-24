import isPrime from './prime-logic.js';


export default function Home() {
  function handleCheck() {
    const input = document.querySelector('#number-input');
    const convertedNum = parseInt(input.value, 10);
    const check = isPrime(convertedNum);

    if(check)
    {
      alert(`${input.value} is a prime number.`);
    } 
    else if(!check)
    {
      alert(`${input.value} is not a prime number.`);
    }
  }


  return (
    <div>
      <h1>Prime Number Checker</h1>
      <input type="number" id="number-input" placeholder="Enter a number"/>
      <button onClick={handleCheck}>Check</button>
    </div>
  );
}
