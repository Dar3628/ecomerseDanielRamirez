import Counter from "../counter/Counter";



const Item = ({name, price, id, stock, setSelectedItem}) => {
    const selectItem = () => setSelectedItem ({name, price, id, stock});
    let otherFunction = () => {
        setTimeout(() => console.log({name}),2000);
    }
  
    return (
        <div>
            <h2> Nombre del producto : {name} </h2>
            <h2> Precio del producto : {price} </h2>
            <button onClick={ selectItem}>
                Seleccionar producto
            </button>
            <button onClick={otherFunction}>
                Imprimir en consola
            </button>
            <Counter stock={stock} />
            <hr />
        </div>    
    )

   
};



export default Item;
