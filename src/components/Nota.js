import { useContext } from "react";
import axios from "axios";
import { InfoLogin, ListaHabitos, NovaRequisicao } from "../Contexts";
import styled from "styled-components";

export default function Nota(){
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
    const {listaHabitos}=useContext(ListaHabitos);
    const {novaRequisicao, setNovaRequisicao}=useContext(NovaRequisicao);

    const {token}=infoLogin;

    function deletarPost(e,id){
        e.preventDefault();
        const promisse=axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {headers: {'Authorization': `Bearer ${token}`}}
        )
        promisse.then(()=>{
            setNovaRequisicao(!novaRequisicao);
        })
        promisse.catch(()=>{
            alert("Erro! Tente novamente.");
        })
    }

    return (
        <>
            {listaHabitos.map(card=>{
                let dias=card.days;
                return (
                    <Habito>
                        <NomeHabito>
                            <Nome>{card.name}</Nome>
                            <Icone>
                                <ion-icon onClick={(e) => deletarPost(e, card.id)} name="trash-outline"></ion-icon>
                            </Icone>
                        </NomeHabito>
                        <DiasDaSemana>
                            {array.map((elem)=>{
                                if(dias.includes(elem.number)){
                                    return (
                                        <Dia 
                                            background="#CFCFCF"
                                            fontColor="white"
                                        >
                                            {elem.day}
                                        </Dia>
                                    )
                                }else{
                                    return(
                                        <Dia 
                                            background="white"
                                            fontColor="#CFCFCF"
                                        >
                                            {elem.day}
                                        </Dia>
                                    )
                                }
                            })}
                        </DiasDaSemana>
                    </Habito>
                )
            })}
        </>
    );


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
const DiasDaSemana=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-right: 5px;
`
const Habito=styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
`
const NomeHabito=styled.div`
    width:100%

    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Nome=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Icone=styled.div`
    color:red;
    width:13px;
    height:15px;
`