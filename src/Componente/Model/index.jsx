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
                    <InputUser placeholder={"valor"}/>
                    </div>
                   
                </form>
                
            </div>
        </div>
    )
}
