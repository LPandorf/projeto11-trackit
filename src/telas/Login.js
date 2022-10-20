import styled from "styled-components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <>
            <Logo />
            <Wrapper>
                <Email>email</Email>
                <Senha>senha</Senha>
                <Botão>Entrar</Botão>
                <Link to={`/cadastro`} >
                    <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
                </Link>
            </Wrapper>
        </>
    )
}
//key={}
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Email = styled.div`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #DBDBDB;
    padding: 15px;
`
const Senha= styled.div`
    color:#DBDBDB;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
`
const Botão=styled.div`
	color: white;
	background: #52B6FF;
	border-radius: 5px;
    width: 303px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Cadastrar=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 30px;
`