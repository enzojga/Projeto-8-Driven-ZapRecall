import react from "react";

export default function Recall(){
    
    const perguntas = [{pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'},
                    {pergunta:'O React é __', resposta:'uma biblioteca JavaScript para construção de interfaces'},
                    {pergunta:'Componentes devem iniciar com __', resposta:'letra maiúscula'},
                    {pergunta:'O ReactDOM nos ajuda __', resposta:'interagindo com a DOM para colocar componentes React na mesma'},
                    {pergunta:'Usamos o npm para __', resposta:'gerenciar os pacotes necessários e suas dependências'},
                    {pergunta:'Usamos props para __', resposta:'passar diferentes informações para componentes'},
                    {pergunta:'Usamos estado (state) para __', resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}];
    function Card(props){
        const [pergunta, setPergunta] = react.useState('pergunta');
        const [frente, setFrente] = react.useState('frente face escondido');
        const [verso, setVerso] = react.useState('verso face escondido');

        console.log(pergunta);
        function viraCarta(){
            if(pergunta === 'pergunta'){
                setPergunta('pergunta escondido');
                setFrente('frente face');
            }
        }
        function mostraPergunta(){
            setFrente('frente face escondido');
            setVerso('verso face');
        }
        return(
                <div className='card' >
                    <div className={pergunta}>
                        <h3>Pergunta 1</h3>
                        <ion-icon name="play-outline" onClick={viraCarta}></ion-icon>
                    </div>
                    <div class={frente}>
                        <p>{props.pergunta}</p>
                        <ion-icon name="reload-outline" onClick={mostraPergunta}></ion-icon>
                    </div>
                    <div class={verso}>
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
                {perguntas.map(pergunta =>(<Card pergunta ={pergunta.pergunta} resposta ={pergunta.resposta}/>)).sort(() => (Math.random() - 0.5))}
            </div>
        </div>
    )
}