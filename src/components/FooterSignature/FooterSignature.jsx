import React from 'react'
import './FooterSignature.css';

const FooterSignature = () => {
    return (
        <footer className="footer-content footer-signature">
            © {new Date().getFullYear()}{" "}
            <a
                href="https://github.com/caiodicatti"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link "
            >
                Caio Dicatti
            </a>
        </footer>
    )
}

export default FooterSignature