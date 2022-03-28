// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';


function App() {
  
   return (
    <div className = "App">
      <Navbar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;