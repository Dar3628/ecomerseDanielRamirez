import React,{ useState } from "react";
// import Item from './item/Item';


const Counter = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    
    const minusCounter = () => {
        if(counter <= 1) return;
        setCounter(counter - 1);
    };

    const plusCounter = () =>{
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    

    // const takeMe = () =>{
    //     setCurrentTimes(currentTimes + 1);
        
    // };

    return (
        <>
            <div>
                {/* <h3>{currentDate}</h3> */}
                <button onClick={minusCounter}>-</button>
                <span>{counter}</span>
                <button onClick={plusCounter}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(counter)}>Add</button>
            </div>
            {/* <button onClick={takeMe}>Presioname</button>
            <h3>Cantidad de veces que fui presionado: {currentTimes}</h3> */}
        </>
    )

};

export default Counter;