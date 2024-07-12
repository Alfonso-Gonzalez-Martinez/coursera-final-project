import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm.js';
import ContextProvider from './Context.js';
import {initializeTimes} from './Context.js';
import { useReducer } from "./Context.js";
import { updateTimes } from "./Context.js";
import {BrowserRouter as Router} from 'react-router-dom';

test('Renders the BookingForm heading', () => {
    render(
        <Router>
            <ContextProvider>
                <BookingForm />
            </ContextProvider>
        </Router>
    );
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});


test('initializeTimes should return a non-empty array', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0)
    }
)

test('updatedTimes returns the value in the state', () => {
    const newState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = {type: "UPDATE_TIME", payload: e.target.value};

    const initialState = initializeTimes();
    const stateAfterAction = useReducer([], action);
    const result = updateTimes();

    expect(initialState).not.toEqual(stateAfterAction); // the initial state and the state after applying update should be different. 
    expect(result).toEqual(stateAfterAction); // the state and the result of the updater function should be the same. 
}
)