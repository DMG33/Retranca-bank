import ButtonUser from "../Button"

import InputUser from "../Inputs"
import"./styles.css"
export default function Model({onClickModel}){

    return(
        <div className="model-teste">
            <div className="modelTeste">
                <form>

                    <h1>Cadastrar transação</h1>

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
                        <ButtonUser />
                        <ButtonUser />
                    </div> 
                </form>
            </div>
        </div>
    )
}
