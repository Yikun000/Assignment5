import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();

    return (
        <div classNameName="heroSection" >
            <h1 classNameName="inHero">Rent Movies Now!</h1>
            <button classNameName="inHero" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
    )
}

export default HeroSection