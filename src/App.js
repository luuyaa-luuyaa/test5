import React from "react"
import Home from "./components/home";
import Readmore from "./components/readmore/bet";
import Readmore2 from "./components/readmore/bet1";
import Readmore3 from "./components/readmore/bet2";
import {Routes,Route, BrowserRouter} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/read" element={<Readmore/>}/>
        <Route path="/read2" element={<Readmore2/>}/>
        <Route path="/read3" element={<Readmore3/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
