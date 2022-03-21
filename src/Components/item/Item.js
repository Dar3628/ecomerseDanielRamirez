import Counter from "../counter/Counter";

const Item = ({name, price, id, setSelectedItem, otherFunction}) => {
const selectItem = () => setSelectedItem ({name, price, id });

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
            <Counter stock={10} />
            <hr />
        </div>    
    )

   
};

Item.propTypes = {

}

export default Item
