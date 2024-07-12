import "./styles.css"


export default function InputUser({placeholder}){

    function myInput(ativity){

        console.log(ativity)

        
    }

    return (

        <div>
            <input className="Input-dados" placeholder={placeholder} onChange={( Flamengo)=> myInput(Flamengo.target.value)}/>
        </div>
    )
}