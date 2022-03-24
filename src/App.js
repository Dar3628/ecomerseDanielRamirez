// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';
//import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import Counter from './Components/counter/Counter'



function App() {
  // const addNewName = () => setNames([...names, "Nuevo nombre"]);
  //   const delete3rdName = () => setNames(names.filter((name, index) => index !==2));
  let stock= 10;
  const onAdd = (contador) =>{
    console.log('click', contador);
  };
   return (
    <div className = "App">
      <Navbar />
      {/* <h1>Error: {"errorMessage"}</h1>
      <h1> Primer intento con React </h1>
      <ItemListContainer /> */}
      <Counter stock={stock} onAdd={onAdd} />
    </div>
  );
}

export default App;