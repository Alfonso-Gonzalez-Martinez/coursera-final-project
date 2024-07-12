import React, {createContext, useState, useReducer} from 'react';

export const FormContext = createContext()

function ContextProvider(props){

    const [form, setForm] = useState({  date: "",
                                        resTime: "",
                                        guests: "",
                                        occasion: ""
                                    })


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
        e.preventDefault()
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

export default ContextProvider;

