import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";


import Habitos from "./telas/Habitos";
import Historico from "./telas/Historico";
import Hoje from "./telas/Hoje";
import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";

import { 
    InfoLogin, 
    AdicionarHabito, 
    ListaHabitos, 
    NovaRequisicao, 
    HabitosHoje, 
    Porcentagem 
} from "./Contexts";

export default function App(){
    const [infoLogin, setInfoLogin]=useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : null);
    const [habitosHoje,setHabitosHoje]=useState([]);
    const [listaHabitos,setListaHabitos]=useState([]);
    const [novaRequisicao,setNovaRequisicao]=useState(false);
    const [adicionarHabito,setAdicionarHabito]=useState(false);
    const [porcentagem,setPorcentagem]=useState(0);

    return(
        <Wrapper>
            <InfoLogin.Provider value={{infoLogin, setInfoLogin}}>
                <HabitosHoje.Provider value={{habitosHoje, setHabitosHoje}}>
                    <ListaHabitos.Provider value={{listaHabitos, setListaHabitos}}>
                        <NovaRequisicao.Provider value={{novaRequisicao, setNovaRequisicao}}>
                            <AdicionarHabito.Provider value={{adicionarHabito,setAdicionarHabito}}>
                                <Porcentagem.Provider value={{porcentagem, setPorcentagem}}>
                                    <GlobalStyle/>
                                    <BrowserRouter>
                                        <Routes>
                                            <Route path="/" element={<Login />} />
                                            <Route path="/cadastro" element={<Cadastro />} />
                                            <Route path="/habitos" element={<Habitos />} />
                                            <Route path="/hoje" element={<Hoje />} />
                                            <Route path="/historico" element={<Historico />} />
                                        </Routes>
                                    </BrowserRouter>
                                </Porcentagem.Provider>
                            </AdicionarHabito.Provider>
                        </NovaRequisicao.Provider>
                    </ListaHabitos.Provider>
                </HabitosHoje.Provider>
            </InfoLogin.Provider>
        </Wrapper>
    )

}   
