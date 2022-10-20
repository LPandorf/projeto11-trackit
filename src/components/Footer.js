import styled from "styled-components";

//falta a barra de progresso circular

export default function Navbar(){
    return(
        <Wrapper>
            <Titulo>Hábitos</Titulo>
            <Titulo>Histórico</Titulo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    left: 0px;
    bottom: 0px;
    
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    padding-left: 18px;
    padding-right: 18px;
`

const Titulo = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
