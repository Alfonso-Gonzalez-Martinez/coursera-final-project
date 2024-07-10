import { useContext } from "react";
import { FormContext } from "../Context.js";

function BookingForm(){

    const {form, handleDate, handleGuests, handleOccasion, handleRestTime, handleSubmit, availableTimes} = useContext(FormContext)

    return(
        <>
        <h1>Make your reservation</h1>
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={form.date} onChange={(e) => handleDate(e)} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={form.resTime} onChange={(e) => handleRestTime(e)}>
                <option value="" disabled>Select an option</option>
                {availableTimes.map((element, index) => (
                    <option key={index}>{availableTimes[index]}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number"
                    placeholder="0"
                    value={form.guests}
                    min="1"
                    max="10"
                    id="guests"
                    onChange={(e) => handleGuests(e)}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={form.occasion} onChange={(e) => handleOccasion(e)}>
                <option value="" disabled>Select an option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" onClick={handleSubmit}/>
        </form>
        </>
    )
}

export default BookingForm;