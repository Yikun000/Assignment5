import "./RegisterView.css"
import { useState } from "react"
import HeaderSection from "../Components/HeaderSection";

function RegisterView() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function rePasswordCheck() { //checks if the re-Entered password is the same
        if (rePassword == password) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <HeaderSection />
            <div classNameName="formContainerReg">
                <h1 classNameName="formTitleReg">Register</h1>
                <form classNameName="formReg" onSubmit={() => rePasswordCheck()?alert('Unavailable'):alert('Passwords are not the same')} >
                    <label classNameName="boxLabelsReg" >First Name:</label>
                    <input required classNameName="infoBoxesReg" type="text" value={firstName} onChange={(event) => { setFirstName(String(event.target.value)) }} />
                    <label classNameName="boxLabelsReg" >Last Name:</label>
                    <input required classNameName="infoBoxesReg" type="text" value={lastName} onChange={(event) => { setLastName(String(event.target.value)) }} />
                    <label classNameName="boxLabelsReg" >Email:</label>
                    <input required classNameName="infoBoxesReg" type="text" value={email} onChange={(event) => { setEmail(String(event.target.value)) }} />
                    <label classNameName="boxLabelsReg" >Pasword:</label>
                    <input required classNameName="infoBoxesReg" type="password" value={password} onChange={(event) => { setPassword(String(event.target.value)) }} />
                    <label classNameName="boxLabelsReg" >Re-enter Password:</label>
                    <input required classNameName="infoBoxesReg" type="password" value={rePassword} onChange={(event) => { setRePassword(String(event.target.value)) }} />

                    <input classNameName="registerButtonReg" type="submit" value={"Register"} />
                </form>
            </div>
        </div>
    )
}

export default RegisterView