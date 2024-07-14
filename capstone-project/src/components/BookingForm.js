import { useContext } from "react";
import { FormContext } from "../Context.js";

function BookingForm(){

    const { form,
            handleDate,
            handleGuests,
            handleOccasion,
            handleRestTime,
            handleSubmit,
            availableTimes,
            errors,
            handleBlur
        } = useContext(FormContext)

    return(
        <>
        <h1>Make your reservation</h1>
        <form
            style={{display: "grid", maxWidth: "200px", gap: "20px"}}
            onSubmit={handleSubmit}>
            <div>
                <label htmlFor="resDate">Choose date</label>
                <input
                    type="date"
                    id="resDate"
                    name="resDate"
                    value={form.resDate}
                    onChange={(e) => handleDate(e)}
                    onBlur={handleBlur} />
                {errors.resDate && <div className="error">{errors.resDate}</div>}
            </div>
            <div>
                <label htmlFor="resTime">Choose time</label>
                <select
                    id="resTime"
                    name="resTime"
                    value={form.resTime}
                    onChange={(e) => handleRestTime(e)}
                    onBlur={handleBlur}>
                        <option value="" disabled>Select an option</option>
                        {availableTimes.map((element, index) => (
                            <option key={index}>{availableTimes[index]}</option>
                        ))}
                </select>
                {errors.resTime && <div className="error">{errors.resTime}</div>}
            </div>

            <div>
                <label htmlFor="guests">Number of guests</label>
                <input type="number"
                        placeholder="1"
                        value={form.guests}
                        min="1"
                        max="10"
                        id="guests"
                        name="guests"
                        onChange={(e) => handleGuests(e)}
                        onBlur={handleBlur}/>
                {errors.guests && <div className="error">{errors.guests}</div>}
            </div>
            
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={(e) => handleOccasion(e)}
                    onBlur={handleBlur}>
                        <option value="" disabled>Select an option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                </select>
                {errors.occasion && <div className="error">{errors.occasion}</div>}
            </div>
            

            <input type="submit"/>
        </form>
        </>
    )
}

export default BookingForm;