import "./RegisterView.css";
import { useState } from "react";
import HeaderSection from "../Components/HeaderSection";

function RegisterView() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); 
        if (password === rePassword) {
            alert("Password Match");
         
        } else {
            alert("Passwords are not the same");
        }
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerReg">
                <h1 className="formTitleReg">Register</h1>
                <form className="formReg" onSubmit={handleSubmit}>
                    <label className="boxLabelsReg">First Name:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="boxLabelsReg">Last Name:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label className="boxLabelsReg">Email:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="boxLabelsReg">Password:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className="boxLabelsReg">Re-enter Password:</label>
                    <input
                        required
                        className="infoBoxesReg"
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />

                    <input className="registerButtonReg" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default RegisterView;
