import "./LoginView.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeaderSection from "../Components/HeaderSection"

function LoginView() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const adminEmail = "a@gmail.com";
    const adminPassword = "a";

    function loginInfoCheck() {

        if ((email == adminEmail) && (password == adminPassword)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <HeaderSection />
            <div classNameName="formContainerLog">
                <h1 classNameName="formTitleLog" >Login</h1>
                <form classNameName="formLog" onSubmit={() => loginInfoCheck() ? navigate('/movies') : alert('Password is incorrect')}>
                    <label classNameName="boxLabelsLog">Email:</label>
                    <input required classNameName="infoBoxesLog" type="text" value={email} onChange={(event) => { setEmail(String(event.target.value)) }} />
                    <label classNameName="boxLabelsLog">Password:</label>
                    <input required classNameName="infoBoxesLog" type="password" value={password} onChange={(event) => { setPassword(String(event.target.value)) }} />

                    <input classNameName="loginButtonLog" type="submit" value={"Login"} />
                </form>
            </div>
        </div>
    )
}

export default LoginView