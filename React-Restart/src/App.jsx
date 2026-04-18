import { useState, createContext, useContext } from "react"

const BulbContex = createContext();

function Bulbcontex({ children }) {
  const [bulbOn, setBulbOn] = useState(false);
  return <BulbContex value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContex>

}
function App() {
  return (
    <div>
      <Bulbcontex>
        <Light />
      </Bulbcontex>

    </div>
  )
}
function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}
function LightBulb() {
  const { bulbOn } = useContext(BulbContex);

  return (
    <div>
      {bulbOn ? "Bulb on" : "Bulb off"}

    </div>
  )
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContex);
  function toggle() {
    setBulbOn(!bulbOn)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  )
}

export default App;