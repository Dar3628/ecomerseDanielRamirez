import { Fragment, useState } from "react"

const FuntionalComponent = ({name, age}) => {
    const [stateName, setStateName] = useState("Juan");
    const [surname, setSurname] = useState ("Pintos");

    const[user, setUser] = useState({
        name: "Juan",
        surname: "Pintos",
    });


    const updateNameAndSurname = () =>{
        setStateName("Leo");
        setUser({ ...user, name: "Leo"});
    };

    return (
        <>
            <h1>FuntionalComponent</h1>
            <h2>stateName: {stateName} </h2>
            <h2>stateSurname: {surname} </h2>
            <h3>State con Objeto</h3>
            <h2>stateName: {user.name}</h2>
            <h2>stateSurname: {user.surname}</h2>
            <button onClick={updateNameAndSurname}>
                Cambiar stateNameAndSurname
            </button>
            <h2> Nombre: {name}</h2>
            <h2> Edad: {age}</h2>
        </>
    )
}

export default FuntionalComponent
