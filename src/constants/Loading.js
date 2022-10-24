import { ThreeDots } from "react-loader-spinner";

export default function Loading(props){
    document.getElementById("botao").disable=false;
    document.getElementById("input").disable=false;
    const carregando=props;
    if(carregando===true){
        console.log("estou aqui");
        document.getElementById("botao").disable=true;
        document.getElementById("input").disable=true;
        return(
            <ThreeDots color="white" width={13} height={13} backgroundColor="#52B6FF" />
        )
    }else{
        return (
            <>
                
            </>
        )
    }
}