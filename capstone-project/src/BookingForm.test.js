import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm.js';
import ContextProvider from './Context.js';
import {initializeTimes} from './Context.js';
import { availableTimesReducer } from "./Context.js";
import { updateTimes } from "./Context.js";

test('Renders the BookingForm heading', () => {
    render(
        <ContextProvider>
            <BookingForm />
        </ContextProvider>
    );
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});


test('initializeTimes should set expected value', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes)
    }
)

test('updatedTimes returns the value in the state', () => {
    const newState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = {type: "SET_TIMES", payload: newState};

    const initialState = initializeTimes();
    const stateAfterAction = availableTimesReducer([], action);
    const result = updateTimes();

    expect(initialState).not.toEqual(stateAfterAction);
    expect(result).toEqual(stateAfterAction);
}
)