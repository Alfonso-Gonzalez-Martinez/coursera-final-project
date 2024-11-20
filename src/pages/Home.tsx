import Header from '../components/Header'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'



const Home: React.FC = (): JSX.Element => {
    return(
    <>
        <Header />
        <Specials />
        <Testimonials />
    </>
    )
}

export default Home;