import React, { useState } from 'react'

const items = [
    { id: '1', name: 'Iphone6', price:'11111'},
    { id: '2', name: 'Iphone6 plus', price:'22222'},
    { id: '3', name: 'Xiaomi redmi 9', price:'33333'},
    { id: '4', name: 'Samsung A5', price:'44444'},
    { id: '5', name: 'Motorola c115', price:'55555'},
];


const ItemListContainer = () => {
    const [selectedItem] = useState(null);

    const otherFunction = () => {
        console.log("otherFunction");
    }
    
    return (
        <div>
            <h1>Lista de productos</h1>
            <h3>Producto seleccionado</h3>
            <p>{selectedItem ? selectedItem.name : 'Ninguno'}</p>
            <p>{selectedItem ? selectedItem.price : 'Ninguno'}</p>
            <p>{selectedItem ? selectedItem.id : 'Ninguno'}</p>

            <hr />
            {items.map(({ id, name, price}) => (
                <item 
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    // setSelectedItem={setSelectedItem}
                    otherFunction={otherFunction}
                />
            ))}
        </div>
    );
};



export default ItemListContainer
