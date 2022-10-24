import axios from "axios";
import {InfoLogin,HabitosHoje,NovaRequisicao,Porcentagem} from "../Contexts";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotaHoje from "../components/NotaHoje";
import { useContext, useEffect } from "react";

export default function Today(){
    let i=0;
    let c=0;
    let porcento=0;

    const {infoLogin}=useContext(InfoLogin);
    const {habitosHoje,setHabitosHoje}=useContext(HabitosHoje);
    const {novaRequisicao}=useContext(NovaRequisicao);
    const {setPorcentagem}=useContext(Porcentagem);

    const {token}=infoLogin;

    const dayjs=require('dayjs');

    const opcao={
        month:'numeric',
        weekday:'long',
        day:'numeric',
    }
    
    let agora=dayjs();
    let hoje= new Date((agora.format('dddd, MM/DD')));
    let diaTraducao=(hoje.toLocaleDateString('pt-br',opcao));
    let remover=diaTraducao.replace('-feira','');
    let renderizarDia= remover[0].toUpperCase();
    //+remover.substr(1)

    useEffect(()=>{
        const promisse=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {headers:
            {'Authorization': `Bearer ${token}`}
        });
        promisse.then((answer)=>{
            setHabitosHoje(answer.data);
        });
        promisse.catch((warning)=>{
            console.log(warning.response);
        });
    }, [novaRequisicao]);

    for(x=0;x<habitosHoje.length;x++){
        if(habitosHoje[x].done===true){
            i++;
            porcento=Math.round((i/(habitosHoje.length)*100));
        }else{
            c++;
        }if(c===habitosHoje.length){
            setPorcentagem(0);
        }
    }

    return (
        <>
            <Navbar/>
            <Wrapper>
                <Titulo>
                    <Dia>{renderizarDia}</Dia>
                    <Concluidos>{porcento}% dos hábitos concluídos</Concluidos>
                </Titulo>
                <NotaHoje/>
            </Wrapper>
            <Footer/>
        </>
    )
}

const Wrapper = styled.div`
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

const Titulo=styled.div`
    display: flex;
    flex-direction: column;
`

const Dia=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const Concluidos=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
`







