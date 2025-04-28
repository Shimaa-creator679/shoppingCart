
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./PAges/Home";
import Details from "./PAges/Details";
import Layout from "./components/layout";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const[count,setcount]=useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout count={count} setcount={setcount}/>}>
  <Route index element={<Home count={count} setcount={setcount}/>}></Route>
  <Route path=":slug" element={<Details/>}></Route>

  </Route>
</Routes>
</BrowserRouter>

 
  )
}

export default App
