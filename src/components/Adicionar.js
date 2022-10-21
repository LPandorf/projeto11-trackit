import styled from "styled-components";

export default function Adicionar(){
    return (
        <Wrapper>
            <NomeDoHabito>nome do hábito</NomeDoHabito>
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
    position: absolute;
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