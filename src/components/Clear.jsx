import "../estilos/Clear.css";
const Clear = (props)=>(
<div className="Boton-clear" onClick={props.handlerClear}>
    {props.children}
</div>
);
export default Clear;