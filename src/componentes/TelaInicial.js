import React from "react";

export default function TelaInicial(){
    const [escondido, setEscondido] = React.useState('tela-inicial');
    function iniciarJogo(){ 
        if(escondido === 'tela-inicial'){
            setEscondido('tela-inicial escondido')
        }
    }
    return(
       <div className={escondido}>
            <div>
            </div>
            <h1>ZapRecall</h1>
            <div onClick={() => iniciarJogo()}>
                <h2>Iniciar Recall!</h2>
            </div>
       </div>
    )
}