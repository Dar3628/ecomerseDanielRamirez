import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';





function App() {
   return (
    <div className = "App">
      <Navbar />
      <h1>Error: {"errorMessage"}</h1>
      <h1> Primer intento con React </h1>
      <img src='loguito.Png' alt = 'loguito'></img>
    </div>
  );
}

export default App;