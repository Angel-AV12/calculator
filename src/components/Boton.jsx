import "../estilos/Boton.css";
function Boton(props){
    const operator = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return(
        <div className={`boton-contenedor ${operator(props.children)?'operador':null}`.trimEnd()}
        onClick={()=>props.handlerclick(props.children)}>
        {props.children}
        </div>
    );
}

export default Boton;