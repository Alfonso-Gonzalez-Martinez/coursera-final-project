import './App.css';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Reservations from './pages/Reservations.js'
import BookingConfirmation from './components/ConfirmedBooking.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContextProvider from './Context.js';


function App() {
  return (
    <>
    <Router>
      <ContextProvider>
      <Nav />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About" exact Component={About} />
        <Route path="/Reservations" exact Component={Reservations} />
        <Route path="/BookingConfirmation" exact Component={BookingConfirmation} />
      </Routes>
      <Footer />
      </ContextProvider>
    </Router>
    </>
  );
}

export default App;

