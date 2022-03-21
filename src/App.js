import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';





function App() {
   return (
    <div className = "App">
      <Navbar />
      <ItemListContainer />
      <h1>Error: {"errorMessage"}</h1>
      <h1> Primer intento con React </h1>
      <img src='loguito.Png' alt = 'loguito'></img>
    </div>
  );
}

export default App;