import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";
import Habitos from "./telas/Habitos";
import Historico from "./telas/Historico";
import Hoje from "./telas/Hoje";

export default function App(){
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


/*





*/