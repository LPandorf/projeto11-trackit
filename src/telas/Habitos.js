import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdicionarHabito from "../components/AdicionarHabito";
import Habito from "../components/Habito";

export default function Habitos(){
    return(
        <>
            <Navbar/>
            <Corpo>
                <LadoALado>
                    <Titulo>Meus hábitos</Titulo>
                    <Mais>+</Mais>
                </LadoALado>
                <AdicionarHabito/>
                <Nenhum>Você não tem nenhum hábito cadastrado ainda. Adicione um para começar a trackear</Nenhum>
                <Habito/>
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