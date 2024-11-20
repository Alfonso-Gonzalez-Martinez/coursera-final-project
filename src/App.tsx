import {Route, Routes, useNavigate} from 'react-router-dom';
import {useReducer} from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About'
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import ConfirmedBooking from './components/ConfirmedBooking'
import type { FormData } from './components/BookingForm';
import './App.css';

interface Action {
  type: string;
  payload?: any;
}

function App() {

  const seededRandom = function (seed: number) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date: Date) {
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


  function updateTimes (state: string[], action: Action) {
    switch(action.type) {
        case "UPDATE_TIME":
            return fetchAPI (new Date(action.payload))
        default:
            return state;
    }
  }

  const submitAPI = (form: FormData) => true;
  const navigate = useNavigate();

  function submitForm(form: FormData) {
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

