import './App.css';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Reservations from './pages/Reservations.js'

function App() {
  return (
    <>
    <Nav />
      <Home />
      <About />
      <Reservations />
    <Footer />
    </>
  );
}

export default App;

