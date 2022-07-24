
export default function BarraInferior(props){
    return(
        <div className="barra-inferior">
            <h3>{props.contador}/{props.perguntasTamanho}CONCLUÍDOS</h3>
            <div className="marcas">
                {props.respondidas}
            </div>
        </div> 
        
    )
}