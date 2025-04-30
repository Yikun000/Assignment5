import "./LoginView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection";

function LoginView() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const adminEmail = "a@gmail.com";
    const adminPassword = "a";

    function loginInfoCheck() {
        return email === adminEmail && password === adminPassword;
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerLog">
                <h1 className="formTitleLog">Login</h1>
                <form 
                    className="formLog" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        loginInfoCheck() 
                            ? navigate("/movies") 
                            : alert("Password is incorrect");
                    }}
                >
                    <label className="boxLabelsLog">Email:</label>
                    <input 
                        required 
                        className="infoBoxesLog" 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label className="boxLabelsLog">Password:</label>
                    <input 
                        required 
                        className="infoBoxesLog" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <input className="loginButtonLog" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default LoginView;
