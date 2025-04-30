import "./FooterSection.css";

function FooterSection() {

    return (
        <div classNameName="footerSec">
            <div classNameName="infoBox">
                <h1 classNameName="inFooter">Github</h1>
                <a classNameName="inFooter" href="https://github.com/Yikun000">My Github</a>
                <a classNameName="inFooter" href="https://github.com/Yikun000/Assignment5">Website repository</a>
            </div>
            <div classNameName="infoBox">
                <h1 classNameName="inFooter" >Socials</h1>
                <a href="#" aria-label="Facebook">🔵</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="LinkedIn">🔗</a>
            </div>
        </div>
    )
}

export default FooterSection