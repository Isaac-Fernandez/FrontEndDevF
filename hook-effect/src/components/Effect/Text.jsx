import { useEffect, useState } from "react"

export default function Text() {
const [text, setText] = useState("")

useEffect(() => {
    console.log("Componente Montado");

    return () => {
        console.log("COMPONENTE DESMONTADO");
    }
}, [])


  return (
    <div>
        <input 
        type='text' 
        placeholder='Modificar texto' 
        onChange={(event) => setText(event.target.value)} 
        />
        <h1>
             {text}
        </h1>
    </div>
  )
}
