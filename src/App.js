import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Habitos from "./telas/Habitos";
import Historico from "./telas/Historico";
import Hoje from "./telas/Hoje";
import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

export default function App(){
    const [tokenuser,setTokenuser] = useState(localStorage.getItem('fazerLogin') ? JSON.parse(localStorage.getItem('fazerLogin')) : null);
    return (
        <>
            <UserContext.Provider value={{tokenuser,setTokenuser}}>
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
            </UserContext.Provider>
        </>
    )
}


/*

                    



*/