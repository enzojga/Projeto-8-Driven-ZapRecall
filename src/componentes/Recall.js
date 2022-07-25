import react from "react";
import Card from "./Card";
import BarraInferior from "./BarraInferior";
export default function Recall(){
    
    const perguntas = [{pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'},
                    {pergunta:'O React é __', resposta:'uma biblioteca JavaScript para construção de interfaces'},
                    {pergunta:'Componentes devem iniciar com __', resposta:'letra maiúscula'},
                    {pergunta:'Podemos colocar __ dentro do JSX',resposta:'expressões'},
                    {pergunta:'O ReactDOM nos ajuda __', resposta:'interagindo com a DOM para colocar componentes React na mesma'},
                    {pergunta:'Usamos o npm para __', resposta:'gerenciar os pacotes necessários e suas dependências'},
                    {pergunta:'Usamos props para __', resposta:'passar diferentes informações para componentes'},
                    {pergunta:'Usamos estado (state) para __', resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}];
    const [respondidas, setRespondidas] = react.useState([]);
    const [contador, setContador] = react.useState(respondidas.length);
    return(
        <>
        <div className="flashcards">
            <div className="topo-flashcards">
                <img src="./assets/images/logo.png"/>   
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                {perguntas.sort(() => (Math.random() - 0.5)).map((pergunta, i) =>(<Card pergunta ={pergunta.pergunta} resposta ={pergunta.resposta} index ={i} respondidas={respondidas} setRespondidas={setRespondidas} setContador={setContador}/>))}
            </div>
        </div>
        <BarraInferior respondidas={respondidas} perguntasTamanho={perguntas.length} contador={contador}/>
        </>
    )
}