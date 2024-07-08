import logo from '../assets/logo.svg'

function Nav(){
    return(
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <img src={logo} alt="little lemon logo"></img>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Orders online</a></li>
                        <li><a>Log in</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;