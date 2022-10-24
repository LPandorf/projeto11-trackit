import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Renderizarbotao from "../components/RenderizarBotao";
import {InfoLogin}from "../Contexts";
import { useContext, useState } from "react";

export default function Login(){
    const {infoLogin, setInfoLogin}=useContext(InfoLogin);
    const [desabilitado,setDesabilitado]=useState(false);
    const [infos,setInfos]=useState({
        email: "",
        password: "",
    });
    const {email, password}=infos;

    const navigate = useNavigate();

    function DoLogin(e){
        console.log("entrou");
        setDesabilitado(true);
        e.preventDefault();
        const promisse=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password,
        });
        promisse.then((answer)=>{
            localStorage.setItem("user", JSON.stringify({
                token: answer.data.token,
                image: answer.data.image,
                name: answer.data.name,
            })
        ); setInfoLogin(answer.data);
            navigate('/hoje');
        });
        promisse.catch((warning)=>{
            alert("Erro! Tente novamente.");
            setDesabilitado(false);
        });
    }
    //
    return (
        <>
            <Logo/>
            <Wrapper onSubmit={DoLogin}>
                <Input               
                    placeholder="email"
                    type="email"
                    value={email}
                    required
                    onChange={(e)=> setInfos({...infos, email: e.target.value})}
                ></Input>
                <Input
                    
                    placeholder="senha"
                    type="password"
                    value={password}
                    required
                    onChange={(e)=> setInfos({...infos, password: e.target.value})}
                ></Input>
                <button
                    type="submit"
                >
                    Entrar
                </button>
            </Wrapper>
            <Link to={`/cadastro`} >
                <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
            </Link>
        </>
    )

}
//<Renderizarbotao state={desabilitado} text="Entrar"/>
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

const Wrapper=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        color: white;
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`
const Input=styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    margin-bottom: 10px;
    padding: 10px;
`
