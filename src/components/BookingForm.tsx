import React, { useState } from 'react';
import './BookingForm.css'

export type FormData = {
    name: string;
    email: string;
    resDate: string;
    resTime: string;
    guests: number;
    occasion: string
}

export type ReservationsProps = {
    availableTimes: string[];
    dispatch: React.Dispatch<any>;
    submitForm: ((formData:FormData) => void);
  }

const BookingForm: React.FC<ReservationsProps> = ({availableTimes, dispatch, submitForm }): JSX.Element => {


    const [form, setForm] = useState<FormData>({  name: "",
                                        email: "",
                                        resDate: "",
                                        resTime: "",
                                        guests: 1,
                                        occasion: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});


    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!form.name || form.name.length < 3 || form.name.length > 40) {
            newErrors.name = 'Name between 3-40 characters';
        }
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!form.resTime) {
            newErrors.resTime = "Reservation time is required"
        }
        if (!form.resDate) {
            newErrors.resDate = 'Date is required';
        }
        if (form.guests < 2 || form.guests > 10) {
            newErrors.guests = 'Guests must be between 2 and 10';
        }
        if (!form.occasion) {
            newErrors.occasion = "Occasion is required"
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validate()) {
            console.log(form);
            submitForm (form);
        }}
  
    function handleDate(e: React.ChangeEvent<HTMLInputElement>){
        setForm((f) => ({...f, resDate: e.target.value}));
        dispatch({type: "UPDATE_TIME", payload: e.target.value})}

    function handleName(e: React.ChangeEvent<HTMLInputElement>){
        setForm((f) => ({...f, name: e.target.value}))};

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>){
        setForm((f) => ({...f, email: e.target.value}))};

    function handleTime(e: React.ChangeEvent<HTMLSelectElement>){
        setForm((f) => ({...f, resTime: e.target.value}))};

    function handleGuests(e: React.ChangeEvent<HTMLInputElement>){
        setForm((f) => ({...f, guests: Number(e.target.value)}))};

    function handleOccasion(e: React.ChangeEvent<HTMLSelectElement>){
        setForm((f) => ({...f, occasion: e.target.value}))};

    return(
        <>
        <div className='form-container'>
            <h1 className='form-header'>Make your reservation</h1>
            <form
                onSubmit={handleSubmit}>

                <div className='form-field'>
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        minLength={3}
                        maxLength={40}
                        id="name"
                        required
                        value={form.name}
                        onBlur={validate}
                        onChange={(e) => handleName(e)}/>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className='form-field'>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        placeholder="Enter your email adress"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => handleEmail(e)}
                        onBlur={validate}
                        />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className='form-field'>
                    <label htmlFor="resDate">Choose date</label>
                    <input
                        type="date"
                        id="resDate"
                        name="resDate"
                        value={form.resDate}
                        onChange={(e) => handleDate(e)}
                        onBlur={validate}
                        required/>
                    {errors.resDate && <span className="error">{errors.resDate}</span>}
                </div>

                <div className='form-field'>
                    <label htmlFor="resTime">Choose time</label>
                    <select
                        id="resTime"
                        name="resTime"
                        value={form.resTime}
                        onChange={(e) => handleTime(e)}
                        onBlur={validate}
                        required>
                            <option value="" disabled>Select an option</option>
                            {availableTimes.map((element, index) => (
                                <option key={index}>{availableTimes[index]}</option>
                            ))}
                    </select>
                    {errors.resTime && <span className="error">{errors.resTime}</span>}
                </div>

                <div className='form-field'>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number"
                            placeholder="1"
                            value={form.guests}
                            min="2"
                            max="10"
                            id="guests"
                            name="guests"
                            onChange={(e) => handleGuests(e)}
                            onBlur={validate}
                            required/>
                    {errors.guests && <span className="error">{errors.guests}</span>}
                </div>

                <div className='form-field'>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={form.occasion}
                        onChange={(e) => handleOccasion(e)}
                        onBlur={validate}
                        >
                            <option value="" disabled>Select an option</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                    </select>
                    {errors.occasion && <span className="error">{errors.occasion}</span>}
                </div>

                <button id="form-button" type="submit" aria-label='Make your Reservation' disabled={
                                        !form.resDate ||
                                        !form.name ||
                                        !form.email ||
                                        !form.occasion
                                        || Boolean(errors.name)
                                        || Boolean(errors.resDate)
                                        || Boolean(errors.guests)
                                        || Boolean(errors.email)
                                        || Boolean(errors.resTime)
                                        || Boolean(errors.occasion)}>Make your Reservation</button>
            </form>
        </div>
        </>
    )
}
export default BookingForm;
