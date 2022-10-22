import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Hoje(){
    return(
        <>
            <Navbar/>
            <Wrapper>

            </Wrapper>
            <Footer/>
        </>
    )
}

const Wrapper = styled.div`
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