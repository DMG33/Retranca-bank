
import "./styles.css"
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline} from "react-icons/io5";


export default function ButtonUser({textorButton,typeIcon}){
  

    return(
        <div> 
            <button
                 className="botão"
                 style={{
                    backgroundColor: typeIcon === "up" ? "#33CC95" : "transparent"
                 }}
                 > 
                {typeIcon === "up"? 
                    <IoArrowUpCircleOutline
                     style={{
                        color: "green"
                         }}
                    /> : 
                    <IoArrowDownCircleOutline 
                     style={{
                        color: "red"
                        }}
                     />}
                {textorButton}
            </button>
        </div>

    
    )
}