import logo2 from '../assets/logo-edit.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
    return(
        <>
         <div className="footer-container">
            <div className="footer-left">
                <img className="footer-image" src={logo2} alt="Restaurant logo"></img>
            </div>
           <nav className="footer-right">
                <div className="footer-links">
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/Reservations">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Log in</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Contact</h2>
                    <ul>
                        <li><Link to="/">Adress</Link></li>
                        <li><Link to="/">Phone Number</Link></li>
                        <li><Link to="/">Email</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Social Media</h2>
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Youtube</Link></li>
                    </ul>
                </div>
           </nav>
         </div>
        </>
    )
}

export default Footer;