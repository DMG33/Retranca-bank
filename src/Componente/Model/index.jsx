import InputUser from "../Inputs"
import"./styles.css"
export default function Model({onClickModel}){

    return(
        <div className="model-teste">
            <div className="modelTeste">

                <form>

                    <h1>Cadastrar transação</h1>
                    <div>
                    <InputUser/>
                    <InputUser/>
                    </div>
                   
                </form>
                
            </div>
        </div>
    )
}
