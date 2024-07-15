import "./styles.css"


export default function InputUser({placeholder, estouFazendo}){

  

    return (

        <div>
            <input className="Input-dados" placeholder={placeholder} onChange={estouFazendo}/>
        </div>
    )
}