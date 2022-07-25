import Resultado from "./Resultado";

export default function BarraInferior(props){

      let erros = props.respondidas.filter((icon) => icon.props.name === "close-circle" );
      console.log(erros);
      function verificaAcerto(){
        if(props.contador === props.perguntasTamanho){
            if(erros.length !== 0){
                return <Resultado img="./assets/images/sad.png" titulo = 'Putz...' text='Ainda faltam alguns... Mas não desanime!'/>
            }
            if(erros.length === 0){
                return <Resultado img="./assets/images/party.png" titulo = 'Parabéns!' text='Você não esqueceu de nenhum flashcard!'/>
            }
        }
        return '';
      }
    return(
        <div className="barra-inferior">
            {verificaAcerto()}
            <h3>{props.contador}/{props.perguntasTamanho} CONCLUÍDOS</h3>
            <div className="marcas">
                {props.respondidas}
            </div>
        </div> 
        
    )
}