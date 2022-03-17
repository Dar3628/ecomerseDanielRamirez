import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';





function App() {
   return (
    <div className = "App">
      <Navbar />
      <h1>Error: {"errorMessage"}</h1>
      <h1> Primer intento con React </h1>
      <firstReactNavbar/>
      <img src='loguitoPng'>loguito</img>
    </div>
  );
}

export default App;
