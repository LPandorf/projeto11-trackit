import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import {InfoLogin,AdicionarHabito,ListaHabitos,NovaRequisicao} from "../Contexts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nota from "../components/Nota";
import NovaNota from "../components/NovaNota";

export default function Habitos(){
    const {setListaHabitos}=useContext(ListaHabitos);
    const {adicionarHabito,setAdicionarHabito}=useContext(AdicionarHabito);
    const {novaRequisicao}=useContext(NovaRequisicao);
    const {infoLogin}=useContext(InfoLogin);
    const {token}=infoLogin;

    useEffect(()=>{
        
    })
}