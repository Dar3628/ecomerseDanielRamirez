import { Button } from "react-bootstrap";
import Counter from "../counter/Counter";



const Item = ({name, price, id, stock, setSelectedItem, otherFunction}) => {
    const selectItem = () => setSelectedItem ({ id});
    let otherFunction2 = () => otherFunction ({name});
  
    return (
        <div>
            <h2> Nombre del producto : {name} </h2>
            <h2> Precio del producto : {price} </h2>
            <Button variant="primary" onClick={ selectItem}>
                Seleccionar producto
            </Button>
            <button onClick={otherFunction2}>
                Imprimir en consola
            </button>
            <Counter stock={stock} />
            <hr />
        </div>    
    )

   
};



export default Item;
