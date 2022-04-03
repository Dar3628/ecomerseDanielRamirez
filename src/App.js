// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/frstReactNavbar.js';
import ItemListContainer from './Components/itemsContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemsContainer/ItemDetailContainer';


function App() {
  
   return (
    <div className = "App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;