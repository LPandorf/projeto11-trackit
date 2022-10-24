import styled from "styled-components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Inputs from "../constants/Inputs";
import { useState } from "react";
import { FazerCadastro } from "../Apis";

export default function Cadastro(){
    
    const [email,setEmail]=useState(" ");
    const [password,setSenha]=useState(" ");
    const [name,setNome]=useState(" ");
    const [image,setFoto]=useState(" ");

    const dados={
        email,
        name,
        image,
        password,
    }

    return (
        <>
            <Logo />
            <Wrapper>
                <Inputs  type="text" placeholder={"email"} onChange={(e)=> setEmail(e.target.value)} />
                <Inputs  type="text" placeholder={"senha"} onChange={(e)=>setSenha(e.target.value)} />
                <Inputs  type="text" placeholder={"nome"} onChange={(e)=>setNome(e.target.value)} />
                <Inputs  type="text" placeholder={"foto"} onChange={(e)=>setFoto(e.target.value)} />
                
                <Botão onClick={()=>FazerCadastro(dados)} id="botao">Entrar</Botão>
                <Link to={`/`}>
                    <Cadastrado>Já tem uma conta? Faça login!</Cadastrado>
                </Link>
            </Wrapper>
        </>
    )
}
//id="input"
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const Cadastrado=styled.div`
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
