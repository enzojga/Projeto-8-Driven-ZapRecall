import TelaInicial from "./TelaInicial"
import Recall from "./Recall"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>} />
                <Route path="/recall" element={<Recall/>}/>
            </Routes>
        </BrowserRouter>
    )
}