import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Historico(){
    return (
        <>
            <Navbar/>
            <Corpo>
                <Titulo>Histórico</Titulo>
                <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
            </Corpo>
            <Footer/>
        </>
    )
}

const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const Titulo = styled.div`
    color:#126BA5;
    width: 100px;
    height: 29px;
    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`
const Texto= styled.div`
    width: 338px;
    height: 74px;
    left: 15px;
    top: 144px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
