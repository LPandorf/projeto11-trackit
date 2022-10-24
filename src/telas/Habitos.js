import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Habito from "../components/Habito";
import { useState } from "react";
import Inputs from "../constants/Inputs";
//import { ListarHabitos } from "../Apis";, useEffect

export default function Habitos(){
    const [Mostrar,setMostrar]=useState(false);
    const [novoHabito, setNovoHabito]=useState("");
    /*const [listar,setListar]=useState([]);

    useEffect(() => {
        ListarHabitos()
        .then((res) => {
            setListar(res.data)
            console.log(res.data)
        })
        
    }, [])*/



    let dias=[];
    function AdicionaDia(d){
        dias=dias+d;
        console.log(dias);
    }
    function fechar(){
        if(Mostrar===false){
            setMostrar(true);
        }else{
            setMostrar(false);
        }
    }
    if(Mostrar){
        return (
            <>
                <Navbar/>
                <Corpo>
                    <LadoALado>
                        <Titulo>Meus hábitos</Titulo>
                        <Mais onClick={fechar}>+</Mais>
                    </LadoALado>
                    <AdicionarHabito>
                        <Inputs type="text" placeholder={"Nome do habito"} onChange={(e)=> setNovoHabito(e.target.value)} />
                        <LadoDias>
                            <Dia onClick={()=>AdicionaDia(0)} >D</Dia>
                            <Dia>S</Dia>
                            <Dia>T</Dia>
                            <Dia>Q</Dia>
                            <Dia>Q</Dia>
                            <Dia>S</Dia>
                            <Dia>S</Dia>
                        </LadoDias>
                        <OpcoesFinais>
                            <Cancelar onClick={fechar}>Cancelar</Cancelar>
                            <Salvar>Salvar</Salvar>
                        </OpcoesFinais>
                    </AdicionarHabito>
                    <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um para começar a trackear</Nenhum>
                    <Habito/>
                </Corpo>
                <Footer/>
            </>
        )
    }else{
        return(
            <>
                <Navbar/>
                <Corpo>
                    <LadoALado>
                        <Titulo>Meus hábitos</Titulo>
                        <Mais onClick={setMostrar}>+</Mais>
                    </LadoALado>
                    <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um para começar a trackear</Nenhum>
                    <Habito/>
                </Corpo>
                <Footer/>
            </>
        )
    }
}
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

const Nenhum= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
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


const AdicionarHabito= styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 20px;
    padding:18px;
`


const LadoDias= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-right: 5px;
`

const Dia= styled.div`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    padding: 2px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Salvar= styled.div`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
const OpcoesFinais=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
`

const Cancelar= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 10px;
`
