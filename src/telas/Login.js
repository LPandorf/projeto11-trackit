import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, Navigate } from "react-router-dom";
import Inputs from "../constants/Inputs";
import { useState } from "react";
import axios from "axios";

const URLbase='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export default function Login(){
    const [email,setEmail]=useState(" ");
    const [password,setSenha]=useState(" ");
    const [avacar,setAvancar]=useState(false);

    function FazerLogin(dados,setAvancar){
        const promise= axios.post(`${URLbase}/auth/login`, dados);
        promise.then(resposta =>{ console.log(resposta); localStorage.setItem('fazerLogin', JSON.stringify({token:resposta.data.token, image:resposta.data.image}))});
        setAvancar(true);
    }

    const dados={
        email,
        password,
    }
    if(avacar){
        return <Navigate to={`/habitos`}/>
    }else{
        return (
            <>
                <Logo />
                <Wrapper>
                    <Inputs type="text" placeholder={"email"} onChange={(e)=> setEmail(e.target.value)} />
                    <Inputs type="text" placeholder={"senha"} onChange={(e)=>setSenha(e.target.value)} />
                    
                    <Botão onClick={()=>FazerLogin(dados,setAvancar)}>Entrar</Botão>
                    <Link to={`/cadastro`} >
                        <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
                    </Link>
                </Wrapper>
            </>
        )
    }
}

//key={}
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