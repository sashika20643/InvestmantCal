import { useState } from "react"

export default function UserInput({label,initialValue,inputType,identifier,handlePredata}){
const [inputvalue,setInputValue]=useState(initialValue)
    const handleChnage=(event,identifier)=>{
setInputValue((predata)=>event.target.value)
handlePredata(identifier,event.target.value)
console.log(inputvalue)
    }

    return (

            <p>


            <label htmlFor="">{label}</label>
            <input type={inputType}  value={inputvalue} onChange={(event)=>handleChnage(event,identifier)} />
            </p>
       
    )
}