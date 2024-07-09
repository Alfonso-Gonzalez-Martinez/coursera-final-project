import './Specials.css'
import { SPECIALS } from '../helpers/specials';

function Specials(){
    return(
    <>
        <div className="specials-container">
            <div className="specials-up">
                <h2>This week Specials</h2>
                <button>Online Menu</button>
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
                            <a>Order delivery</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Specials;