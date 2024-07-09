import './App.css';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Reservations from './pages/Reservations.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About" exact Component={About} />
        <Route path="/Reservations" exact Component={Reservations} />
      </Routes>
      <Footer />
    </Router>
   
    </>
  );
}

export default App;

