import photo1 from '../assets/image-chef.jpg';
import photo2 from '../assets/image-food.jpg'
import photo3 from '../assets/image-restaurant.jpg'

import './About.css'

function About(){
    return(
    <>
        <div className='about-container'>
            <div className='about-image-container'>
                <img src={photo1} alt='Chef sprinkling the final touches in a dish'></img>
                <img src={photo2} alt='A cook holding a dish'></img>
                <img src={photo3} alt='A side view of the terrace of the restaurant'></img>
            </div>
            <div className='about-text-container'>
                <h1>About Little Lemon Restaurant</h1>
                <p>Nestled in the heart of Chicago, Little Lemon Restaurant 
                    brings a refreshing zest to the city's vibrant culinary scene. 
                    Known for its delightful fusion of Mediterranean and contemporary 
                    American cuisine, Little Lemon offers a unique dining experience
                    where fresh, locally sourced ingredients shine. Whether you're savoring
                    our signature lemon-infused dishes or enjoying a handcrafted cocktail,
                    each visit promises a memorable journey of flavors. Join us at Little Lemon
                    for a warm, inviting atmosphere perfect for any occasion.</p>
            </div>
        </div>
  
    </>
    )
}

export default About;