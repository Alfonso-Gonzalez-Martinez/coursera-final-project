/* REAL LOGIC FOR THE REDUCER FUNCTION:
    Placed before the component, outside.

export const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}
*/


  ///////////////////////////////////

/* REAL API IMPLEMENTATION:

function initializeTimes(){
    return [];
}

const fetchData = async (date) => {
        try{
            const response = await fetch(`url{date}`);
            if(!response.ok) {
                throw new Error('Network not responding')
            }
            const newAvailableTimes = await response.json();
            return newAvailableTimes;
        }
        catch(error){
            throw error;
        }
    }


useEffect(() => {
    if (form.date) {
        fetchData(form.date).then(newAvailableTimes => {
            dispatch({ type: 'SET_TIMES', payload: newAvailableTimes });
        });
    }
}, [form.date]);
*/
