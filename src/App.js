import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState("")

const clicker = () => {
  setCounter(counter + 1);
  if(counter == 4){
    setMessage("wow you like clicking")
  } else if (counter == 9){
    setMessage("careful now you'll break it!")
  }
};

  return (
    <div>
    <h1>This is my website</h1>
    <h1>{counter}</h1>
    <button onClick={clicker}>Clicker</button>
    <p>{message}</p>
    </div>
  )
}


export default App;
