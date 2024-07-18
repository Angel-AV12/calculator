import logo from "./imagenes/freecodecamp-logo.png";
import "./App.css";
import Boton from "./components/Boton.jsx";
import Pantalla from "./components/Pantalla.jsx";
import Clear from "./components/Clear.jsx";
import { useState } from "react";
import {evaluate} from "mathjs";
function App(){
  const [input,setInput] = useState('');
  const addInput = val =>{
    setInput(input + val);
  };

  const result = ()=>{
    if(input){
      setInput(evaluate(input));  
    }
    else{
      alert("Por favor ingrese valores para realizar los calculos")
    }
    
  };

  return (
    <div className="App">
      <div className="Freecodecamp-logo-container">
        <img src={logo} alt="Logo" className="freecodecamp-logo" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
        <Boton handlerclick={addInput}>1</Boton>
        <Boton handlerclick={addInput}>2</Boton>
        <Boton handlerclick={addInput}>3</Boton>
        <Boton handlerclick={addInput}>+</Boton>
        </div>
        <div className="fila">
        <Boton handlerclick={addInput}>4</Boton>
        <Boton handlerclick={addInput}>5</Boton>
        <Boton handlerclick={addInput}>6</Boton>
        <Boton handlerclick={addInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton handlerclick={addInput}>7</Boton>
        <Boton handlerclick={addInput}>8</Boton>
        <Boton handlerclick={addInput}>9</Boton>
        <Boton handlerclick={addInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton handlerclick={result}>=</Boton>
        <Boton handlerclick={addInput}>0</Boton>
        <Boton handlerclick={addInput}>.</Boton>
        <Boton handlerclick={addInput}>/</Boton>
        </div>
      <div className="fila">
        <Clear handlerClear={()=> setInput('')}>Clear</Clear>
      </div>
      </div>
    </div>
  )
}
export default App;