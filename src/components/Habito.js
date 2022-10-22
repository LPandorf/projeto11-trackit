import styled from "styled-components";

export default function Habito(){
    return (
        <Wrapper>
            <Titulo>Ler 1 capitulo por dia</Titulo>
            <Lixinho><ion-icon name="trash-outline" ></ion-icon></Lixinho>
            <LadoALado>
                <Dia>D</Dia>
                <Dia>S</Dia>
                <Dia>T</Dia>
                <Dia>Q</Dia>
                <Dia>Q</Dia>
                <Dia>S</Dia>
                <Dia>S</Dia>
            </LadoALado>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 14px;
    margin-top: 10px;
`

const Titulo=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
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

const LadoALado=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-right: 5px;
`

const Lixinho=styled.div`
    width: 60px;
    height: 60px;
    background: #FFFFFF;
`