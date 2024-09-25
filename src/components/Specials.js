import './Specials.css'
import { SPECIALS } from '../helpers/specials';
import { Link } from 'react-router-dom';

function Specials(){
    return(
    <>
        <div className="specials-container">
            <div className="specials-up">
                <h2>This Week's Specials</h2>
                <button aria-label='Online Menu'>Online Menu</button>
            </div>
            <div className="specials-down">
                {SPECIALS.map((element, index) => (
                    <div key={index} className="specials-card">
                        <img src={element.img} alt={element.title}/>
                        <div className="specials-card-text">
                            <div className="specials-card-up-text">
                                <h2>{element.title}</h2>
                                <p>{element.price}€</p>
                            </div>
                            <p>{element.description}</p>
                            <Link to="/">Order delivery</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Specials;