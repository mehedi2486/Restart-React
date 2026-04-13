import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  //SPAs (signle page application)
  return (
    <>
      <BrowserRouter>
      
        <Link to={"/"}>Allen</Link>
        |
        <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
        |
        <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>

        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )


};


function Class11Program() {
  return (
    <div>
      NEET programs for Class 11th
    </div>
  )
}

function Class12Program() {
  return (
    <div>
      NEET programs for Class 12th
    </div>
  )
}

function Landing() {
  return (
    <div>
      Wellcome to the Alen website
    </div>
  )
}








export default App;