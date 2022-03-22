import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';



function App() {
  const addNewName = () => setNames([...names, "Nuevo nombre"]);
    const delete3rdName = () => setNames(names.filter((name, index) => index !==2));
  
   return (
    <div className = "App">
      <Navbar />
      <h1>Error: {"errorMessage"}</h1>
      <h1> Primer intento con React </h1>
      <img src='loguito.Png' alt = 'loguito'></img>
      <ItemListContainer />
      <button onClick={addNewName} >Agregar nuevo Nombre</button>
      <button onClick={delete3rdName} >eliminar Nombre</button>
      <ul>
        {names.map((name) =>{
          return <li key={`${name}${index}${new Date()}`} >{name}</li>;
        })}
      </ul>
      {[1, 2, 3, 4, 5].map((number)=>{
        if(number<3) {
        return <h2 key={number}>{number}</h2>;
        }
        return null;
      })}
    </div>
  );
}

export default App;