import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { InfoLogin, NovaRequisicao, HabitosHoje } from "../Contexts";

export default function NotaHoje(){
    const {infoLogin}=useContext(InfoLogin);
    const {habitosHoje}=useContext(HabitosHoje);
    const {novaRequisição,setNovaRequisicao}=useContext(NovaRequisicao);
    
    const [desabilitado,setDesabilitado]=useState(false);

    const {token}=infoLogin;

    function Completo(e,id){
        e.preventDefault();
        setDesabilitado(true);
        const promisse=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            null, 
            {headers: {
                'Authorization': `Bearer ${token}`
            }}
        )
        promisse.then(()=>{
            setNovaRequisicao(!novaRequisição);
            setDesabilitado(false);
        })
        promisse.catch((warning)=>{
            alert("Erro! Tente novamente.");
            setDesabilitado(false);
        })
    }
    function Incompleto(e,id){
        e.preventDefault();
        setDesabilitado(true);
        const promisse=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            null, 
            {headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        promisse.then(()=>{
            setNovaRequisicao(!novaRequisição);
            setDesabilitado(false);
        });
        promisse.catch((warning)=>{
            alert("Erro! Tente novamente.");
            setDesabilitado(false);
        });    
    }

    return (
        <>
            {habitosHoje.map(elem=>{
                return (
                    <Nota>
                        <Info>
                            <Titulo>
                                {elem.name}
                            </Titulo>
                            <Sequencia 
                                fontColorSequencia={elem.done?"#8FC549":"#666666"}
                            >
                                Sequência atual:{elem.currentSequence} {elem.currentSequence>1? "dias":"dia"}
                            </Sequencia>
                            <Recorde 
                                fontColorRecorde={elem.currentSequence===elem.highestSequence? "#8FC549":"#666666"}
                            >
                                Seu recorde:{elem.highestSequence} {elem.highestSequence>1? "dias":"dia"}
                            </Recorde>
                        </Info>
                        <Icone
                            disabled={desabilitado}
                            background={elem.done? "#8FC549" : "#E7E7E7"}
                            onClick={(e)=>{elem.done? Incompleto(e, elem.id):Completo(e,elem.id)}}
                        >
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </Icone>
                    </Nota>
                )
            })}
        </>
    )


}


const Nota= styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

const Info= styled.div`
    display: flex;
    flex-direction: column;
`
const Titulo= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Icone=styled.div`
    width: 70px;
    height: 70px;
`
const Sequencia= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
`

const Recorde= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
`