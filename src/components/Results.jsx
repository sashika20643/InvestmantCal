import { formatter } from "../util/investment.js";


export default function Results( {annualdata}) {
    // console.log(annualdata)

    return (
        <div  className="center">
            <table id="result">
                <thead>
                <tr>
                    <th >
                        Year
                    </th>
                    <th>
                    Investment value
                    </th>
                    <th>
                    Interest(year)
                    </th>
                    <th>
                  Total interest 
                    </th>
                    <th>
                   Invested Capital
                    </th>
                </tr>
                </thead>
                <tbody>
                    {annualdata.map((data)=>{ 
                        
                        const totalInvested = data.valueEndOfYear - data.annualInvestment * data.year;
                        const totalAmountInvested = data.valueEndOfYear-totalInvested ;
                        return (
                        
                        <tr>
<td>{data.year}</td>
<td>{formatter.format(data.valueEndOfYear)}</td>
<td>{formatter.format(data.interest)}</td>
<td>{formatter.format(totalInvested )}</td>
<td>{formatter.format(totalAmountInvested  )}</td>

</tr>
                    )})}
                </tbody>
            </table>
        </div>

    )

}