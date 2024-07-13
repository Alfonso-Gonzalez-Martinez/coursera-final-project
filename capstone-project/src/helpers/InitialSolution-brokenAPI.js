/* REAL LOGIC FOR THE REDUCER FUNCTION:
    Placed before the component, outside.

export const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}
*/


  ///////////////////////////////////

/* REAL API IMPLEMENTATION:

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
*/


import React, { createContext, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Create the context
export const FormContext = createContext();

// Initialize times function
const initializeTimes = () => fetchAPI(new Date());

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

// Reducer function
function updateTimes(state, action) {
    switch(action.type) {
        case "UPDATE_TIME":
            return fetchAPI(new Date(action.payload));
        default:
            return state;
    }
}

// Seeded random function
const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

// Validation schema using Yup
const validationSchema = Yup.object({
    date: Yup.string().required('Date is required'),
    resTime: Yup.string().required('Reservation time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'At least 1 guest').max(10, 'Maximum 10 guests'),
    occasion: Yup.string().required('Occasion is required')
});

////////////////////////////////////

function ContextProvider(props) {
    const [form, setForm] = useState({
        date: "",
        resTime: "",
        guests: "",
        occasion: ""
    });

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();
    const submitAPI = form => true;

    function submitForm(form) {
        if(submitAPI(form)) {
            navigate("/BookingConfirmation");
        }
    }

    // Use Formik's useFormik hook for validation
    const formik = useFormik({
        initialValues: form,
        validationSchema,
        validateOnChange: false, // We will handle validation manually
        validateOnBlur: false,
        onSubmit: submitForm
    });

    // Custom handleChange functions that incorporate Formik validation
    function handleDate(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        dispatch({ type: "UPDATE_TIME", payload: value });

        formik.setFieldValue(name, value, false);
        formik.validateField(name);
    }

    function handleRestTime(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));

        formik.setFieldValue(name, value, false);
        formik.validateField(name);
    }

    function handleGuests(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));

        formik.setFieldValue(name, value, false);
        formik.validateField(name);
    }

    function handleOccasion(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));

        formik.setFieldValue(name, value, false);
        formik.validateField(name);
    }

    function handleBlur(e) {
        const { name } = e.target;
        formik.validateField(name);
    }

    function handleSubmit(e) {
        e.preventDefault();
        formik.validateForm().then(validationErrors => {
            if (Object.keys(validationErrors).length === 0) {
                submitForm(form);
            } else {
                formik.setErrors(validationErrors);
            }
        });
    }

    const contextValue = {
        form,
        setForm,
        handleDate,
        handleRestTime,
        handleGuests,
        handleOccasion,
        handleBlur,
        handleSubmit,
        availableTimes,
        errors: formik.errors
    };

    return (
        <FormContext.Provider value={contextValue}>
            {props.children}
        </FormContext.Provider>
    );
}

export { initializeTimes, updateTimes };
export default ContextProvider;