
import Model from "./Componente/Model"
import"./estilo.css"





export default function App(){

  const openModel = true


function alerta (idade) {

alert(idade)

}


  return (
    <div>
    <div>
      <div className="card">
        <button onClick={()=>alerta("Dave")}>
          Nova transação
        </button>
        <div>
         <div>
           <p>Entradas</p>
           <h3>R$ 300</h3>
         </div>
        </div>
      </div>
    </div>
    {openModel && <Model/>}
    </div>
  )
}



