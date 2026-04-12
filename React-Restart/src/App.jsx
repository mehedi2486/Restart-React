import { useEffect, useState } from "react";
//Build a React component that behaves like an auto-incrementing counter with controls.
function App() {
  const [count, setCount] = useState(0);
  const [isRunnign, setIsRunning] = useState(false);

  
 useEffect ( ()=> {
  let interval;
  if(isRunnign){
    interval = setInterval(() => {
      setCount(c => c + 1)
    },1000)
  }
  return () =>{
    clearInterval(interval)
  }

 },[isRunnign])
  

  function start(){
    setIsRunning(true)
  }
  function stop(){
    setIsRunning(false)
  }

  function reset(){
    setIsRunning(false);
    setCount(0);
  }





  return (
    <div>
      <button onClick = {start}>Start</button>
      <button onClick = {stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <h1>{count}</h1>
      <p>Status: {isRunnign ? "Running" : "Stopped"}</p>
    </div>
  )

}




export default App;