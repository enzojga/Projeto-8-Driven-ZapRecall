import react from "react";
export default function Card(props){
    const [pergunta, setPergunta] = react.useState('pergunta');
    const [frente, setFrente] = react.useState('frente face escondido');
    const [verso, setVerso] = react.useState('verso face escondido');
    const [ionIcon, setIonIcon] = react.useState('play-outline');

    function viraCarta(){
        if(pergunta === 'pergunta'){
            setPergunta('pergunta escondido');
            setFrente('frente face');
        }
    }
    function mostraPergunta(){
        setFrente('frente escondido');
        setVerso('verso face');
    }
    function casoErrar(){
        setPergunta('pergunta erro');
        setVerso('verso face escondido');
        setIonIcon('close-circle');
        props.setRespondidas([...props.respondidas,<ion-icon name="close-circle" class="erro"></ion-icon>])
        props.setContador(props.respondidas.length +1);
    }
    function casoDuvida(){
        setPergunta('pergunta duvida');
        setVerso('verso face escondido');
        setIonIcon('help-circle');
        props.setRespondidas([...props.respondidas,<ion-icon name="help-circle" class="duvida"></ion-icon>])
        props.setContador(props.respondidas.length +1);
    }
    function casoAcerto(){
        setPergunta('pergunta acerto');
        setVerso('verso face escondido');
        setIonIcon('checkmark-circle');
        props.setRespondidas([...props.respondidas,<ion-icon name="checkmark-circle" class="acerto"></ion-icon>])
        props.setContador(props.respondidas.length +1);
    }
    return(
            <div className='card' >
                <div className={pergunta}>
                    <h3>Pergunta {props.index + 1}</h3>
                    <ion-icon name={ionIcon} onClick={viraCarta}></ion-icon>
                </div>
                <div class={frente}>
                    <p>{props.pergunta}</p>
                    <img src="./assets/images/seta.png" onClick={mostraPergunta}/>
                </div>
                <div class={verso}>
                    <p>{props.resposta}</p>
                    <div className="opcoes">
                        <div className="zaps nao-lembrei" onClick={casoErrar}><p>Não lembrei</p></div>
                        <div className="zaps quase" onClick={casoDuvida}><p>Quase não lembrei</p></div>
                        <div className="zaps correta" onClick={casoAcerto}><p>Zap!</p></div>
                    </div>
                </div>
            </div>
            )
}
