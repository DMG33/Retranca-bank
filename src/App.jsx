
import { useState } from "react"
import Model from "./Componente/Model"
import"./estilo.css"
import"./App.css"





export default function App(){




  const [modelAberta, setModelAberta]= useState(false)
 
  function handleModelAberta(){
    setModelAberta(true)
  }
  
  function handleModelClose(){
    setModelAberta(false)
  }

  



function alerta (idade) {

alert(idade)

}

function retrancaMaravilha(){
const idade = prompt("quantos anos voce tem?")




if(idade<18){
  alert("menor de idade")
} else{
  alert("maior de idade")
}

}

  return (
    <div style={{position: "relative"}}>
      {/* <button onClick={()=>handleModelAberta()}>
        clique Aqui
      </button> */}
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
      <Model onClickModel={()=>handleModelClose()}/>
    </div>
  )
}




