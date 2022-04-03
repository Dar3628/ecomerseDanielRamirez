import { Button } from "react-bootstrap";
import Counter from "../counter/Counter";



const Item = ({name, price, id, stock, setSelectedItem, otherFunction}) => {
    const selectItem = () => setSelectedItem ({ id});
    let otherFunction2 = () => otherFunction ({name});
  
    return (
        <div>
            
            <h5> Producto : <td/> {name} </h5>
            <h5> Precio : <td/> {price} </h5>
            <Button className="me-2" variant="primary" onClick={ selectItem}>
                Seleccionar
            </Button>
            
            <Button className="me-2" variant="primary" onClick={otherFunction2}>
                print consola
            </Button>
            <Counter stock={stock} />
            <hr />
        </div>    
    )

   
};



export default Item;
