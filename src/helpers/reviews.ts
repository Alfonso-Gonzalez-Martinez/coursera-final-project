import photo1 from '../assets/testimonials/photo1.png'
import photo2 from '../assets/testimonials/photo2.png'
import photo3 from '../assets/testimonials/photo3.png'
import photo4 from '../assets/testimonials/photo4.png'


export type Reviews = {
    img: string;
    name: string;
    rating: string;
    review: string;
}

export const REVIEWS: Reviews[] = [
    {
        img: photo1,
        name: "Elena",
        rating: "⭐⭐⭐⭐⭐",
        review: "Wonderful place, lovely staff and amazing food.",
    },
    {
        img: photo2,
        name: "Alan",
        rating: "⭐⭐⭐⭐",
        review: "We were in a hurry and we couldn't be more satisfied.",
    },
    {
        img: photo3,
        name: "Paul",
        rating: "⭐⭐⭐⭐⭐",
        review: "The location is amazing and the prices are really appealing."
    },
    {
        img: photo4,
        name: "Estrella",
        rating: "⭐⭐⭐⭐",
        review: "We had an amazing dinner, definitely recommended."
    },
]