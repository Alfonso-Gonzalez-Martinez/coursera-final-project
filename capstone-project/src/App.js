import './App.css';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import About from './pages/About.js'
import Home from './pages/Home.js'
import Reservations from './pages/Reservations.js'
import ConfirmedBooking from './components/ConfirmedBooking.js'
import {Route, Routes, useNavigate} from 'react-router-dom';
import React, {useReducer} from 'react';


function App() {

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };

  const initializeTimes = () => fetchAPI (new Date())
  const [availableTimes, dispatch] = useReducer(updateTimes,[], initializeTimes);


  function updateTimes (state, action) {
    switch(action.type) {
        case "UPDATE_TIME":
            return fetchAPI (new Date(action.payload))
        default:
            return state;
    }
  }

  const submitAPI = form => true;
  const navigate = useNavigate();

  function submitForm(form) {
      if(submitAPI(form)) {
          navigate("/confirmed")
      }
  }

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
        </Routes>
        <Footer /> 
    </>
  );
}

export default App;


// Add aria-label to the two buttons (in the homepage, double check the tests)
// Add hover to the buttons and to the links in the footer (change color to contrasting)
// Check colors, fonts and font sizes.
// Links in the buttons (use LINK router) and in the logo.
// Disabled in the form styling (light grey)
// Extra hover all the cards in the first page (easy box shadow)
