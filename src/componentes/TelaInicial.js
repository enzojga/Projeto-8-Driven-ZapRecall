import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/recall"><div onClick={() => iniciarJogo()}>
                <h2>Iniciar Recall!</h2>
            </div></Link>
       </div>
    )
}