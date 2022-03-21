import { useState } from "react";

const Counter = ({stock}) => {
    const [counter, setCounter] = useState(0);
    const [currentTimes, setCurrentTimes] = useState(0);
    const [currentDate, setCurrentDate] = useState("");

    const minusCounter = () => {
        if(counter <= 0) return;
        setCounter(counter - 1);
    };

    const plusCounter = () =>{
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    const takeMe = () =>{
        setCurrentTimes(currentTimes + 1);
        
    };

    return (
        <>
            <div>
                <h3>{currentDate}</h3>
                <button onClick={minusCounter}>-</button>
                <span>{counter}</span>
                <button onClick={plusCounter}>+</button>
            </div>
            <button onClick={takeMe}>Presioname</button>
            <h3>Cantidad de veces que fui presionado: {currentTimes}</h3>
        </>
    )

};

export default Counter;