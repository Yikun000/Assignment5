import "./HeaderSection.css";
import { useNavigate } from "react-router-dom";

function HeaderSection() {

    const navigate = useNavigate();

    return (
        <div classNameName="toolbar" >
            <h1 classNameName="inHeader" onClick={() => navigate('/')} ><span id="red">Wooflix</span> </h1>
            <button onClick={() => navigate('/register')} classNameName="inHeader" >Sign Up</button>
            <button onClick={() => navigate('/login')} classNameName="inHeader" >Sign In</button>
        </div>
    )
}

export default HeaderSection