import logo2 from '../assets/logo-edit.png'

function Footer(){
    return(
        <>
         <div className="footer-container">
            <img src={logo2}></img>
           <nav>
                <div className="footer-links">
                    <h2>Dormat Navigation</h2>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Log in</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Contact</h2>
                    <ul>
                        <li><a>Adress</a></li>
                        <li><a>Phone Number</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h2>Social Media Links</h2>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>Youtube</a></li>
                    </ul>
                </div>
           </nav>
         </div>
        </>
    )
}

export default Footer;