import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();

    return (
        <div className="heroSection" >
            <h1 className="inHero">Rent Movies Now!</h1>
            <button className="inHero" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
    )
}

export default HeroSection