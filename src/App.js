import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Habitos from "./telas/Habitos";
import Historico from "./telas/Historico";
import Hoje from "./telas/Hoje";

export default function App(){
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


/*
habitos

import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";


<Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
*/