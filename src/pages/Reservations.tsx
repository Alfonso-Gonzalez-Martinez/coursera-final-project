import BookingForm from "../components/BookingForm";
import type {ReservationsProps} from "../components/BookingForm"

const Reservations: React.FC<ReservationsProps> = ({availableTimes, dispatch, submitForm }): JSX.Element => {
    return(
    <>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </>
    )
}

export default Reservations;