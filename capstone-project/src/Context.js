import React, {createContext, useState, useReducer, useEffect} from 'react';

export const FormContext = createContext()

export const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}


function ContextProvider(props){

    const [form, setForm] = useState({  date: "",
                                        resTime: "",
                                        guests: "",
                                        occasion: ""
                                    })

    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer, [], initializeTimes);


function initializeTimes(){
    return [];
}

const fetchData = async (date) => {
        try{
            const response = await fetch(`url{date}`);
            if(!response.ok) {
                throw new Error('Network not responding')
            }
            const newAvailableTimes = await response.json();
            return newAvailableTimes;
        }
        catch(error){
            throw error;
        }
    }


useEffect(() => {
    if (form.date) {
        fetchData(form.date).then(newAvailableTimes => {
            dispatch({ type: 'SET_TIMES', payload: newAvailableTimes });
        });
    }
}, [form.date]);


    function handleDate(e){
        setForm((f) => ({...f, date: e.target.value}));
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

