import { useState, useEffect } from "react";

function App() {
  //conditional rendaring
  
  const [counterVisible, setCounterVisible] = useState(false);

  useEffect(function () {
    setInterval(function () {
      setCounterVisible(
        c => !c
      )
    }, 5000)
  },[] )
  return <div>
    {counterVisible ? <Counter></Counter> : null}
  </div>

}





function Counter() {
  const [count, setCount] = useState(0);

  //clearInterval
  useEffect(function () {
    console.log("hi there")
   let clock = setInterval(function () {
      console.log("From inside the interval");
      setCount(count + 1)
    }, 1000)
    return function (){
      console.log("unmount")
      clearInterval(clock);
    }
     
  }, [])

 

  console.log("render");

  return <div>
    <h1 id="text">{count}</h1>
    <button>Increase Count</button>
  </div>



}

export default App
