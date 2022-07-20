export default function Recall(){
    const perguntas = [{pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'},
                    {pergunta:'O React é __', resposta:'uma biblioteca JavaScript para construção de interfaces'},
                    {pergunta:'Componentes devem iniciar com __', resposta:'letra maiúscula'},
                    {pergunta:'O ReactDOM nos ajuda __', resposta:'interagindo com a DOM para colocar componentes React na mesma'},
                    {pergunta:'Usamos o npm para __', resposta:'gerenciar os pacotes necessários e suas dependências'},
                    {pergunta:'Usamos props para __', resposta:'passar diferentes informações para componentes'},
                    {pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'},
                    {pergunta:'Usamos estado (state) para __', resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}];
    function Card(props){
        return(
                <div class="card" onclick="viraCarta(this)" data-identifier="card">
                    <h3>Pergunta 1</h3>
                    <ion-icon name="play-outline"></ion-icon>
                    <div class="front-face face">
                        <p>{props.pergunta}</p>
                    </div>
                    <div class="back-face face" data-identifier="back-face">
                        <p>{props.resposta}</p>
                    </div>
                </div>
                )
    }
    return(
        <div className="flashcards">
            <div className="topo-flashcards">
                <img src="./assets/images/logo.png"/>
                <h1>ZapRecall</h1>
            </div>
            <div className="cards">
                {perguntas.map(pergunta =>(<Card pergunta ={pergunta.pergunta} resposta ={pergunta.resposta}/>))}
            </div>
        </div>
    )
}