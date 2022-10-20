import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Habitos(){
    return(
        <>
            <Navbar/>
            <Corpo>
                <Titulo>Meus hábitos</Titulo>
                <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um para começar a trackear</Nenhum>
            </Corpo>
            <Footer/>
        </>
    )
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