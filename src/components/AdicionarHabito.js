import styled from "styled-components";

export default function AdicionarHabito(){
    return (
        <Wrapper>
            <NomeDoHabito>nome do hábito</NomeDoHabito>
            <LadoALado>
                <Dia>D</Dia>
                <Dia>S</Dia>
                <Dia>T</Dia>
                <Dia>Q</Dia>
                <Dia>Q</Dia>
                <Dia>S</Dia>
                <Dia>S</Dia>
            </LadoALado>
            <OpcoesFinais>
                <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </OpcoesFinais>
        </Wrapper>
    )
}

const Wrapper= styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 20px;
    padding:18px;
`

const NomeDoHabito= styled.div`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`

const LadoALado= styled.div`
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
