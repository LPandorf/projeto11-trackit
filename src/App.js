//import { useState } from "react"
import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Login from "./telas/Login";
//import Cadastro from "./telas/Cadastro";
import Habitos from "./telas/Habitos";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Habitos/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

/*
<Route path="/hoje" element={<Hoje/>}/>

<Route path="/historico" element={<Historico/>}/>
<Route path="/" element={<Login/>}/>
<Route path="/cadastro" element={<Cadastro/>}/>
habitos
*/