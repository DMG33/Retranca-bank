import ButtonUser from "../Button"
import { IoMdClose } from "react-icons/io";
import InputUser from "../Inputs"
import"./styles.css"
import { useState } from "react";

export default function Model({onClickModel}){

    const [title, setTile,] = useState("")
    const [valor, setValor] = useState("")
    const [opcoes, setOpcoes] = useState("")

    function myInput(ativity){

        console.log(ativity.target.value);
     
                       
    }

    return(
        <div className="model-teste">
            
            
            <div className="modelTeste">
            <IoMdClose color="cecece" style={{cursor: "pointer"}}/>

                <form className="paraCima">
                    <h1>
                        Cadastrar transação
                    </h1>
            
                    <div>
                        <div style= {{
                            display: "flex",
                            justifyCont:"space-between",
                            flexDirection: "column",
                            gap:10,
                            marginBottom: 10

                        }}>
                            <InputUser placeholder={"Titulo"} estouFazendo={myInput}/>


                            <InputUser placeholder={"0"}/>
                        </div>

                        <div className="pressionUser">
                            <ButtonUser typeIcon ={"up"} textorButton ={"Entrada"}/>
                            <ButtonUser textorButton ={"Saida"}/>
                        </div>
                    </div>
                       
                       <button className="cadastrar">
                        Cadastrar
                       </button>
                       
                    </form>
            </div>
        </div>
    )
}
