export default function Resultado(props){
    return(
        <div className="resultado">
            <h1><img src={props.img}/> {props.titulo}</h1>
            <h2>{props.text}</h2>
         </div>
    )
}