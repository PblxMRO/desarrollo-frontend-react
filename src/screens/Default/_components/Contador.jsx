import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Contador = () => {
    //variable de estado, funcion que te permite modificar la variable
    const [contador, setContador] = useState(0);
    

    const handleContador = () => {
        setContador(contador + 1);
    };
    const handleContador2 = () => {
        setContador(contador - 1);
    };
    
    //Ciclo de vida en React

    //Esta funcion especial se ejecuta cuando el componete 
    // se haya montado
    // []
    useEffect(() =>{
        setContador(12);
    }, []);
    //esta funcion especial se ejecuta cuando haya cambiado
    // el valor de contador
    // [ contador ]
    useEffect(() =>{
       if(contador ===15) 
        alert('El contador es 15');
             
    }, [contador]);

    //esta funcion especial se ejecuta cuando el componente
    // de desmonta
    useEffect(() =>{
        return ()=>{
            console.log('El componente se desmonto')
        }
    });


    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
            <Button variant="light" onClick={handleContador}>Aumentar</Button>{' '}
            <Button variant="light" onClick={handleContador2}>Disminuir</Button>
            </div>
        </>
    );
};

export default Contador;