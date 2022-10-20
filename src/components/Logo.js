import styled from "styled-components";
import img from "../assets/img/logo.png";

export default function Logo(){
    return(
        <Wrapper>
            <Imagem src={img}></Imagem>
            <Nome>TrackIt</Nome>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Nome=styled.div`
    width: 210px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    color: #126BA5;
`

const Imagem=styled.img`
    width: 200px;
    heigth: auto;
`
