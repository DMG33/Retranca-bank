import ButtonUser from "../Button"
import { IoMdClose } from "react-icons/io";
import InputUser from "../Inputs"
import"./styles.css"

export default function Model({onClickModel}){

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
                            gap:10

                        }}>
                            <InputUser placeholder={"Titulo"}/>
                            <InputUser placeholder={"0"}/>
                        </div>

                        <div className="pressionUser">
                            <ButtonUser textorButton ={"Entrada"}/>
                            <ButtonUser textorButton ={"Saida"}/>
                        </div>
                    </div>
                       
                       <button className="cadastrar">
                        Cadastar
                       </button>
                       
                    </form>
            </div>
        </div>
    )
}
