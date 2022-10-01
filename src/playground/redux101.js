import { createStore } from 'redux';


// Action generators - functions that return action objects. 



const incrementCount = ({ incrementby = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementby
});


const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT', 
    decrementBy
});


const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});


// Reducers are pure function.
// never change state or action

const countReducer = (state= {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        
        return {
            count: state.count + action.incrementby,
        };
        case 'DECREMENT': 
        
        return {
            count: state.count - action.decrementBy,
        };
        case 'RESET': return {
            count: 0,
        };
        case 'SET': return {
            count: action.count,
        }
        default: return state;
    };
    
    
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
console.log(store.getState());
});
store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101}));






