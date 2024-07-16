import BookingForm from "../components/BookingForm.js";

function Reservations({availableTimes, dispatch, submitForm }){
    return(
    <>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </>
    )
}

export default Reservations;