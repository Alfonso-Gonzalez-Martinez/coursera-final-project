import {render, screen, fireEvent} from "@testing-library/react";
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

describe("booking component general work", () => {


    const renderComponent = (() => {
        render(
            <Router>
                <ContextProvider>
                    <BookingForm />
                </ContextProvider>
            </Router>
            )
        });

    test('renders date input with correct attributes', () => {
        renderComponent();
        const dateInput = screen.getByLabelText("Choose date");
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("name", "resDate");
        expect(dateInput).toHaveAttribute("id", "resDate")
        expect(dateInput).toHaveAttribute("value", "")
        })

    test('renders reservation time input with correct attributes', () => {
        renderComponent();
        const resInput = screen.getByLabelText("Choose time");
        expect(resInput).toBeInTheDocument();
        expect(resInput).toHaveAttribute("name", "resTime");
        expect(resInput).toHaveAttribute("id", "resTime");
        const availableTimes = initializeTimes()
        availableTimes.forEach(time => {
            expect(screen.getByText(time)).toBeInTheDocument();
          });
        })

    test('renders guests input with correct attributes', () => {
        renderComponent();
        const guestInput = screen.getByLabelText("Number of guests");
        expect(guestInput).toBeInTheDocument();
        expect(guestInput).toHaveAttribute("type", "number");
        expect(guestInput).toHaveAttribute("name", "guests");
        expect(guestInput).toHaveAttribute("id", "guests");
        expect(guestInput).toHaveAttribute("value", "1");
        expect(guestInput).toHaveAttribute("placeholder", "1")
        expect(guestInput).toHaveAttribute("min", "1")
        expect(guestInput).toHaveAttribute("max", "10")
        })
    test('renders occasion input with correct attributes', () => {
        renderComponent();
        const occasionInput = screen.getByLabelText("Occasion");
        expect(occasionInput).toBeInTheDocument();
        expect(occasionInput).toHaveAttribute("name", "occasion");
        expect(occasionInput).toHaveAttribute("id", "occasion")
        })


    test('submits the form with valid data', () => {
        renderComponent();
        fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-12-31' } });
        fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

        let submitButton = screen.getByRole('button', { name: "Submit" });
        expect(submitButton).not.toBeDisabled();

        fireEvent.submit(submitButton);
    });

    test('submit button disabled because of invalid date', () => {
        renderComponent()
        fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

        let submitButton = screen.getByRole('button', { name: "Submit" });
        expect(submitButton).toBeDisabled();

        fireEvent.submit(submitButton);
        expect().toHaveBeenCalled();
    })

    test('submit button disabled because of invalid number of guests', () => {
        renderComponent()
        fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-12-31' } });
        fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '11' } });
        fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

        let submitButton = screen.getByRole('button', { name: "Submit" });
        expect(submitButton).toBeDisabled();

        fireEvent.submit(submitButton);
        expect().toHaveBeenCalled();
        }) 
});