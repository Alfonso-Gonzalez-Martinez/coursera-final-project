import food from '../assets/image-food.jpg'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
    <>
        <div className="header-container">
            <div className="text-container">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button aria-label='Reserve a Table'><Link to="/Reservations">Reserve a Table</Link></button>
            </div>
            <div className="image-container">
                <img src={food} alt="food platter"></img>
            </div>
        </div>
    </>
    )
}

export default Header;