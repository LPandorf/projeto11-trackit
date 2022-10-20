//import { useState } from "react"
import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Login from "./telas/Login";
//import Cadastro from "./telas/Cadastro";
//import Habitos from "./telas/Habitos";
import Historico from "./telas/Historico";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Historico/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

/*
<Route path="/hoje" element={<Hoje/>}/>
<Route path="/habitos" element={<Habitos/>}/>
historico
<Route path="/" element={<Login/>}/>
<Route path="/cadastro" element={<Cadastro/>}/>

*/