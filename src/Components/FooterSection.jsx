import { Link } from "react-router-dom";
import "./FooterSection.css";

function FooterSection() {
    return (
        <footer className="footerSection">
            <div className="footerContent">
                <div className="footerLogo">
                    <h2>🎬 Info Box</h2>
                    <a
                        href="https://github.com/Yikun000"
                        target="_blank"
                        rel="noreferrer"
                    >
                        My Github
                    </a>
                </div>

                <div className="footerSocials">
                    <h3>Follow Us</h3>
                    <div className="socialIcons">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            🐦
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            📸
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            📘
                        </a>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <p>&copy; {new Date().getFullYear()} Wooflix. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default FooterSection;
