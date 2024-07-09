import './Testimonials.css'
import {REVIEWS} from '../helpers/reviews.js'

function Testimonials(){
    return(
    <>
        <div className="testimonials-container">
            <h2>Testimonials</h2>
            <div className="testimonials-cards">
                {REVIEWS.map((element, index) => (
                    <div key={index} className="card">
                        <h2>{element.rating}</h2>
                        <div className="card-block">
                            <img src={element.img} alt={element.name}/>
                            <p>{element.name}</p>
                        </div>
                        <p>{element.review}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

export default Testimonials;