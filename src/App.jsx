
import { useState } from "react"
import UserInput from "./components/UserInput.jsx"

import { calculateInvestmentResults,formatter } from "./util/investment.js";
import Results from "./components/Results.jsx";

function App() {
const [precaldata,setPrecaldata]=useState({
  initialInvestment:1200,
  annualInvestment:5000,
expectedReturn:6,
duration:10,
});
const [annualdata,setAnnualdata]=useState(calculateInvestmentResults(precaldata))
function handlePredata(key,value){
setPrecaldata(data=>{
  let newdata={...data}
  return {
    ...newdata,
  [key]:+value
  }
})

let newdata= {...precaldata}
console.log(newdata)
setAnnualdata( calculateInvestmentResults(newdata));



}

 
  return (

    <div>
<div id="user-input">
        <div className="input-group">
        <UserInput label="INNITIAL INVESTMENT" identifier={"initialInvestment"} initialValue={precaldata.initialInvestment} handlePredata={handlePredata} inputType={"number"}/>
        <UserInput label="Annual INVESTMENT" identifier={"annualInvestment"} initialValue={precaldata.annualInvestment} handlePredata={handlePredata} inputType={"number"}/>
        </div>
        <div className="input-group">
        <UserInput label="expected return"  identifier={"expectedReturn"} initialValue={precaldata.expectedReturn} handlePredata={handlePredata} inputType={"number"}/>
        <UserInput label="duration" identifier={"duration"} initialValue={precaldata.duration} handlePredata={handlePredata} inputType={"number"}/>
        </div>
        </div>
        <Results annualdata={annualdata} />

        </div>
  
  )
}

export default App
