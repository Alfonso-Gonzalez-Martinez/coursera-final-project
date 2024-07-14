import {render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm.js';
import ContextProvider from './Context.js';
import {initializeTimes} from './Context.js';
import {updateTimes} from "./Context.js";
import {BrowserRouter as Router} from 'react-router-dom';

test('Renders the BookingForm heading', () => {
    render(
        <Router>
            <ContextProvider>
                <BookingForm />
            </ContextProvider>
        </Router>
    );
    const headingElement = screen.getByText("Make your reservation"); // Similar to DOM manipulation.
    expect(headingElement).toBeInTheDocument();
});


test('initializeTimes should return a non-empty array', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
});

test('updatedTimes returns the value in the state and uses the provided date as payload', () => {


    const initialState = initializeTimes();
    const action = {type: "UPDATE_TIME", payload: "2024-08-28"};
    const stateAfterAction = updateTimes(initialState, action);

    expect(initialState).not.toEqual(stateAfterAction); // the initial state and the state after applying update should be different. 
});

