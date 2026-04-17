import { useState } from "react"

function App(){
  return(
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb(){
  const [BulbOn, setBulbOn] = useState(false);
  return(
    <div>
      <BulbState bulbOn = {BulbOn}/>
      <ToggleBulbState bulbOn = {BulbOn} setBulbOn = {setBulbOn}/>
    </div>
  )
}

function BulbState({bulbOn}){
  return (
    <div>
      {bulbOn ? "Bulb on" : "Bulb off"}

    </div>
  )
}

function ToggleBulbState({setBulbOn, bulbOn}){
  function toggle(){
    setBulbOn(!bulbOn)
  }
   return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
   )
}

export default App;