import React, {createContext, useState, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

function updateTimes (state, action) {
    switch(action.type) {
        case "UPDATE_TIME":
            return fetchAPI (new Date(action.payload))
        default:
            return state;
    }
}

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const validationSchema = Yup.object({
    resDate: Yup.string().required('Date is required'),
    resTime: Yup.string().required('Reservation time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'At least 1 guest').max(10, 'Maximum 10 guests'),
    occasion: Yup.string().required('Occasion is required')
});
////////////////////////////////////

function ContextProvider(props){

    const [form, setForm] = useState({  resDate: "",
                                        resTime: "",
                                        guests: "1",
                                        occasion: ""
                                    })

    const [availableTimes, dispatch] = useReducer(updateTimes,[], initializeTimes);


    const navigate = useNavigate()
    const submitAPI = form => true;
    function submitForm(form) {
        if(submitAPI(form)) {
            navigate("/BookingConfirmation")
        }
    }

    const formik = useFormik({
        initialValues: form,
        validationSchema,
        validateOnChange: false, // We will handle validation manually
        validateOnBlur: false,
        onSubmit: submitForm
    });

    function handleDate(e){
        const {name, value} = e.target;
        setForm((f) => ({...f, resDate: e.target.value}));
        dispatch({type: "UPDATE_TIME", payload: (e.target.value)})

        formik.setFieldValue(name, value, false);
    }
    function handleRestTime(e){
        const {name, value} = e.target;
        setForm((f) => ({...f, resTime: e.target.value}))


        formik.setFieldValue(name, value, false);
    }
    function handleGuests(e){
        setForm((f) => ({...f, guests: e.target.value}))
        const {name, value} = e.target;

        formik.setFieldValue(name, value, false);
    }
    function handleOccasion(e){
        setForm((f) => ({...f, occasion: e.target.value}))
        const {name, value} = e.target;

        formik.setFieldValue(name, value, false);
    }

    function handleBlur(e) {
        const { name } = e.target;
        formik.validateField(name);
    }

    function handleSubmit(e){
        e.preventDefault();
        formik.validateForm().then(validationErrors => {
            if (Object.keys(validationErrors).length === 0) {
                submitForm(form);
            } else {
                formik.setErrors(validationErrors);
            }
        })
        console.log(form)
        setForm({
                resDate: "",
                resTime: "",
                guests: "1",
                occasion: ""
            })
    }

    const contextValue = {
        form, 
        setForm, 
        handleDate, 
        handleRestTime, 
        handleGuests, 
        handleOccasion, 
        handleSubmit,
        handleBlur, 
        availableTimes,
        errors: formik.errors,
    }
    return (
        <>
            <FormContext.Provider value={contextValue}>
                {props.children}
            </FormContext.Provider>
        </>
    )
}

export {initializeTimes, updateTimes}
export default ContextProvider;


