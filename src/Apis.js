import axios from "axios";

const URLbase='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function FazerCadastro(){
    const promise= axios.post(`${URLbase}/auth/sign-up`);
    return promise;
}
function FazerLogin(){
    const promise= axios.post(`${URLbase}/auth/login`);
    return promise;
}
function CriarHabito(){
    const promise= axios.post(`${URLbase}/habits`);
    return promise;
}
function ListarHabitos(){
    const promise= axios.get(`${URLbase}/habits`);
    return promise;
}
function DeletarHabito(habitoId){
    const promise= axios.delete(`${URLbase}/habits/${habitoId}`);
    return promise;
}
function BuscarHabitosDeHoje(){
    const promise= axios.get(`${URLbase}/habits/today`);
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

export  {FazerCadastro, FazerLogin, CriarHabito, ListarHabitos, DeletarHabito, BuscarHabitosDeHoje, MarcarHabitoComoFeito, DesmarcarHabitoComoFeito, HistoricoHabitosDiario};