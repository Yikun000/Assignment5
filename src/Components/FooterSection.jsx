import "./FooterSection.css";

function FooterSection() {

    return (
        <div className="footerSec">
            <div className="infoBox">
                <h1 className="inFooter">Github</h1>
                <a className="inFooter" href="https://github.com/Yikun000">My Github</a>
                <a className="inFooter" href="https://github.com/Yikun000/Assignment5">Website repository</a>
            </div>
            <div className="infoBox">
                <h1 className="inFooter" >Socials</h1>
                <a href="#" aria-label="Facebook">🔵</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="LinkedIn">🔗</a>
            </div>
        </div>
    )
}

export default FooterSection