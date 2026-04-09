import { useState, useEffect } from "react";

function App() {
  //conditional rendaring
  let counterVisible = true;
  return <div>
   {counterVisible ? <Counter></Counter> : null}
  </div>

}



function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function () {
      setCount(count + 1)
    }, 1000)
  },[count])

  console.log("render");

  return <div>
    <h1 id="text">{count}</h1>
    <button>Increase Count</button>
  </div>



}

export default App
