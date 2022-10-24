import { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import RenderizarBotao from "./RenderizarBotao.js";
import {InfoLogin, AdicionarHabito, NovaRequisicao} from "../Contexts";

export default function NovaNota(){
    let array = [
        {day:"D", number:0},
        {day:"S", number:1},
        {day:"T", number:2},
        {day:"Q", number:3},
        {day:"Q", number:4},
        {day:"S", number:5},
        {day:"S", number:6}
    ];

    const {infoLogin}=useContext(InfoLogin);
    const {adicionarHabito,setAdicionarHabito}=useContext(AdicionarHabito);
    const {novaRequisicao,setNovaRequisicao}=useContext(NovaRequisicao);

    const [inserirHabito,setInserirHabito]=useState("");
    const [desabilitado,setDesabilitado]=useState(false);
    const [selecionado,setSelecionado]=useState([]);

    const {token}=infoLogin;

    function postarNovaNota(e){
        if(selecionado.length>0 && inserirHabito!==""){
            setDesabilitado(true);
            e.preventDefault();
            const promisse=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
                name:inserirHabito,
                days:selecionado,
            },{
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            promisse.then(()=>{
                setAdicionarHabito(false);
                setNovaRequisicao(!novaRequisicao);
            });
            promisse.catch((warning)=>{
                alert("Erro! Tente novaamente.");
                setDesabilitado(false);
            });
        }else{
            alert("É necessário que todos os cammpos estejam preenchidos");
        }
    }

    if(adicionarHabito===true){
        return (
            <>
                <Nota>
                    <Habito 
                        disabled={desabilitado}
                        type="text"
                        placeholder="nome do hábito"
                        onChange={(e)=>setInserirHabito(e.target.value)}
                    />
                    <DiasDaSemana>
                        {array.map(elem=>{
                            if(!selecionado.includes(elem.number)){
                                return (
                                    <Dia 
                                        disabled={desabilitado}
                                        type="button"
                                        fontColor="#DBDBDB"
                                        background="white"
                                        onClick={()=>{
                                            setSelecionado([...selecionado,elem.number])}
                                        }
                                    >
                                        {elem.day}
                                    </Dia>
                                )
                            }else{
                                return (
                                    <Dia 
                                        disabled={desabilitado}
                                        type="button"
                                        fontColor="white"
                                        background="#DBDBDB"
                                        onClick={()=>{
                                            setSelecionado(selecionado.filter((day)=> day!== elem.number))}
                                        }
                                    >
                                        {elem.day}
                                    </Dia>
                                )
                            }
                        })}
                    </DiasDaSemana>
                    <Botoes>
                        <Cancelar onClick={()=> setAdicionarHabito(false)}>
                            Cancelar
                        </Cancelar>
                        <Salvar onClick={(e)=>postarNovaNota(e)}>
                            <RenderizarBotao state={desabilitado} text="Salvar"/>
                        </Salvar>
                    </Botoes>
                </Nota>
            </>
        )
    }else{
        return (
            <>
            </>
        )
    }
}

const Dia=styled.div`
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

const Nota=styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding:18px;
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

const Botoes= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
`

const DiasDaSemana= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-right: 5px;
`

const Habito= styled.input`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color:gray;
    font-weight: 400;
    font-size: 19.976px;
    padding: 15px;
    font-family: "Lexend Deca";
`