import './Testimonials.css'
import {REVIEWS} from '../helpers/reviews'
import type {Reviews} from '../helpers/reviews'

const Testimonials: React.FC = (): JSX.Element => {
    return(
    <>
        <div className="testimonials-container">
            <h2>Testimonials</h2>
            <div className="testimonials-cards">
                {REVIEWS.map((element: Reviews, index: number) => (
                    <div key={index} className="card" data-testid="cards">
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