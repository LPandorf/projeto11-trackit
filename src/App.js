import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Login from "./telas/Login";
//import Cadastro from "./telas/Cadastro";
import Habitos from "./telas/Habitos";
//import Historico from "./telas/Historico";
//import Hoje from "./telas/Hoje";

export default function App(){
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Habitos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


/*
<Route path="/" element={<Login />} />
<Route path="/hoje" element={<Hoje />} />
habitos
<Route path="/historico" element={<Historico />} />
<Route path="/cadastro" element={<Cadastro />} />
*/