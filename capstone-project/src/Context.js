import React, {createContext, useState, useReducer} from 'react';

export const FormContext = createContext()

export const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}

export function initializeTimes(){
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

export function updateTimes(e){
    // Use event to take the date from the input and fetch data from that date.
    // New data is the updated Times. For the specific date, there are these hours available [].
    const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    return updatedTimes;
}



function ContextProvider(props){

    const [form, setForm] = useState({  date: "",
                                        resTime: "",
                                        guests: "",
                                        occasion: ""
                                    })

    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer, [], initializeTimes);



    function handleDate(e){
        setForm((f) => ({...f, date: e.target.value}));
        dispatch({type: "SET_TIMES", payload: updateTimes(e.target.value)}) // e.target feeds the day to updateTimes, updateTimes uses the date to fetch the array with possible hours
                                              // the dispatch uses the array to change the state of the availableTimes
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
        console.log(form)
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

