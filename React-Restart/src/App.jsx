import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  function Increment(){
  setCount(count + 1)
}

  function Decrement(){
  if(count > 0){
    setCount(count -1)
  }
}

  function Restart(){
  setCount(0)
}

let message;

if(count <= 5){
  message = "LOW"
}else if(count <=10){
  message = "Medium"
}else {
  message = "High"
}


  return (
  <div>
    <button onClick={Increment}>Increase</button>
    <button onClick={Decrement}>Decrease</button>
    <button onClick={Restart}>Reset</button>
    <br />
    <h1>{count}</h1>
    <p>Status: {message}</p>

  </div>
  )

}




export default App;