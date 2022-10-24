import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import {InfoLogin,AdicionarHabito,ListaHabitos,NovaRequisicao} from "../Contexts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nota from "../components/Nota";
import NovaNota from "../components/NovaNota";

export default function Habitos(){
    const {setListaHabitos}=useContext(ListaHabitos);
    const {adicionarHabito,setAdicionarHabito}=useContext(AdicionarHabito);
    const {novaRequisicao}=useContext(NovaRequisicao);
    const {infoLogin}=useContext(InfoLogin);
    const {token}=infoLogin;

    useEffect(()=>{
        const promisse=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {headers:
            {'Authorization': `Bearer ${token}`}
        });
        promisse.then((answer)=>{
            setListaHabitos(answer.data);
        });
        promisse.catch((warning)=>{
            console.log(warning.response);
        });
    },[novaRequisicao]);

    function AdicionarNota(){
        if(adicionarHabito===true){
            return(
                <NovaNota/>
            );
        }else{
            return(
                <>
                </>
            );
        }
    }

    function Mostrar(){
        if(setListaHabitos.length!==0){
            return(
                <Nota/>
            );
        }else{
            return(
                <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um para começar a trackear</Nenhum>
            )
        }
    }

    return(
        <>
            <Navbar/>
            <Corpo>
                <LadoALado>
                    <Titulo>Meus hábitos</Titulo>
                    <Mais onClick={()=>setAdicionarHabito(true)}>+</Mais>
                </LadoALado>
                <AdicionarNota/>
                <Novos>
                    <Mostrar/>
                </Novos>
            </Corpo>
            <Footer/>
        </>
    )
}

const Nenhum= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const Corpo=styled.div`
    margin-top: 70px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #E5E5E5;
    padding: 20px;
`
const Titulo= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 20px;
`

const LadoALado= styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const Mais= styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px;
`
const Novos=styled.div`
    width: 100%;
    height: auto;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
`

