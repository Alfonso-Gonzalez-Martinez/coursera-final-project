import logo from '../assets/logo.svg'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <img src={logo} alt="little lemon logo"></img>
                </div>
                <div className="nav-right">
                    <ul className="nav-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/Reservations">Reservations</Link></li>
                        <li><Link to="/">Orders online</Link></li>
                        <li><Link to="/">Log in</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;