import axios from "axios";
import { UserContext } from "./contexts/UserContext";
//import { useState } from "react";
//import Loading from "./constants/Loading";
//import { Link , Navigate} from "react-router-dom";
//import { UserProvider } from "./contexts/UserContext";

const URLbase='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

const config = {
	headers: {
		"Authorization": `Bearer` + UserContext.token
	}
}

//

function FazerCadastro(dados){
    //Loading(true);
    //const [lugar,setLugar]=useState("");
    console.log(dados);
    const promise= axios.post(`${URLbase}/auth/sign-up`, dados);
    //Loading(false);
    promise.then(resposta =>{ console.log(resposta)});
}

function CriarHabito({diasDaSemana, titulo}){
    const promise= axios.post(`${URLbase}/habits`,{diasDaSemana, titulo, config});
    return promise;
}
function ListarHabitos(){
    const promise= axios.get(`${URLbase}/habits`, {config});
    return promise;
}
function DeletarHabito(habitoId){
    const promise= axios.delete(`${URLbase}/habits/${habitoId}`);
    return promise;
}
function BuscarHabitosDeHoje({ dia}){
    const promise= axios.get(`${URLbase}/habits/today`,{dia, config});
    return promise;
}
function MarcarHabitoComoFeito(habitoId){
    const promise= axios.post(`${URLbase}/habits/${habitoId}/check`);
    return promise;
}
function DesmarcarHabitoComoFeito(habitoId){
    const promise= axios.post(`${URLbase}/habits/${habitoId}/uncheck`);
    return promise;
}
function HistoricoHabitosDiario(){
    const promise= axios.get(`${URLbase}/habits/history/daily`);
    return promise;
}

export  {FazerCadastro, CriarHabito, ListarHabitos, DeletarHabito, BuscarHabitosDeHoje, MarcarHabitoComoFeito, DesmarcarHabitoComoFeito, HistoricoHabitosDiario};