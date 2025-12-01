import { useState } from 'react'
import './App.css'

export default function App() {
  const [number, setNumber] = useState(0);
  let [increaseNumber, setIncreaseNumber] = useState("");

  function handleNumClick() {
    setNumber(number + 1);
  }

  function handleIncreaseNumChange(e) {
    setIncreaseNumber(e.target.value);
  }

  function handleIncreaseNumClick() {
    const increaseNum = Number(increaseNumber);
    
    if (!isNaN(increaseNum)) {
      setNumber(number + increaseNum);
    }
  }

	return (
		<main>
      <h1>{number}</h1>
      <button onClick={handleNumClick}> +1 </button>
      <br /><br />
      <input
        type="text"
        onChange={handleIncreaseNumChange}
        placeholder="숫자만 적으세요"
      />
      <br /><br />
      <button onClick={handleIncreaseNumClick}> + {Number(increaseNumber)}</button>
    </main>
	)
}
