import styled from "styled-components";

export default function Inputs({type, placeholder, onChange}){
    return(
        <Inputinho type={type} placeholder={`${placeholder}`} onChange={onChange}></Inputinho>
    )
}

const Inputinho = styled.input`
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
    color:gray;
    font-weight: 400;
    font-size: 19.976px;
    padding: 15px;
    font-family: "Lexend Deca";
`

/*
, disable
color: #DBDBDB;

disabled={disable}

    
  color: #dbdbdb;
*/