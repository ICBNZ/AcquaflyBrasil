import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>© Acquafly Brasil {new Date().getFullYear()}</li>
                <li>Phone: (85) 85937035</li>
                <a id="footer_link" href="https://islaclare.com" target="_blank" rel="noopener noreferrer">Site: ICB</a>
            </ul>
            <Link id="book_now" to="/contact">Book Now</Link>
        </div>
    )
}

export default Footer;
