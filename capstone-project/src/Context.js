import React, {createContext, useState, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
export const FormContext = createContext()

const initializeTimes = () => fetchAPI (new Date())
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

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

function ContextProvider(props){

    const [form, setForm] = useState({  date: "",
                                        resTime: "",
                                        guests: "",
                                        occasion: ""
                                    })


   


    const [availableTimes, dispatch] = useReducer(updateTimes,[], initializeTimes);

    function updateTimes (state, action) {
        switch(action.type) {
            case "UPDATE_TIME":
                return fetchAPI (new Date(action.payload))
            default:
                return state;
        }
    }
    const navigate = useNavigate()
    const submitAPI = form => true;
    function submitForm(form) {
        if(submitAPI(form)) {
            navigate("/BookingConfirmation")
        }
    }

    function handleDate(e){
        setForm((f) => ({...f, date: e.target.value}));
        dispatch({type: "UPDATE_TIME", payload: (e.target.value)})
    }
    function handleRestTime(e){
        setForm((f) => ({...f, resTime: e.target.value}))
    }
    function handleGuests(e){
        setForm((f) => ({...f, guests: e.target.value}))
    }
    function handleOccasion(e){
        setForm((f) => ({...f, occasion: e.target.value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        submitForm(form);
    }

    const contextValue = {form, setForm, handleDate, handleRestTime, handleGuests, handleOccasion, handleSubmit, availableTimes}
    return (
        <>
            <FormContext.Provider value={contextValue}>
                {props.children}
            </FormContext.Provider>
        </>
    )
}

export {initializeTimes}
export default ContextProvider;


