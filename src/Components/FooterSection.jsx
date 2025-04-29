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
                <h1 className="inFooter" >Contact Info</h1>
                <p class="inFooter">Name: Yikun <br /> Phone Number: 647-XXXX-XXXX</p>
            </div>
        </div>
    )
}

export default FooterSection