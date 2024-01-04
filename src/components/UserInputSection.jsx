import UserInput from "./UserInput"

export default function UserInputSection(){
    return (
        <div id="user-input">
        <div className="input-group">
        <UserInput label="INNITIAL INVESTMENT" initialValue={0} inputType={"number"}/>
        <UserInput label="Annual INVESTMENT" initialValue={0} inputType={"number"}/>
        </div>
        <div className="input-group">
        <UserInput label="expected return" initialValue={0} inputType={"number"}/>
        <UserInput label="duration" initialValue={0} inputType={"number"}/>
        </div>
        </div>
    )
}