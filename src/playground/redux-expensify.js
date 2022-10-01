console.log('redux-expensify');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD-EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0} = { } 
    ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note, 
        amount, 
        createdAt
    }
});

//REMOVE-EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
});

//EDIT-EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

//SET-TEXT-FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER', 
    text
});

//SORT-BY-DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE' 

})

//SORT-BY-AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//SET-START-DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE', 
    startDate
})

//SET-END DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state= expensesReducerDefault, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
        return [
            ...state, 
            action.expense
        ];
        case 'REMOVE_EXPENSE': 
        return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE': 
        return state.map((expense) => {
            if(expense.id === action.id) {
                return { 
                    ...expense, 
                    ...action.updates
                }
            } else {
                return expense;
            };

        });
        default: 
        return state;
    }
};

// filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_AMOUNT': 
        return {
            ...state, 
            sortBy: 'amount'
        }; 
        case 'SORT_BY_DATE': 
        return { 
            ...state, 
            sortBy: 'date'
        };
        case 'SET_START_DATE': 
        return { 
            ...state, 
            startDate: action.startDate
        }
        case 'SET_END_DATE': 
        return { 
            ...state, 
            endDate: action.endDate
        }
        default: 
        return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // figure out if expenses.description as the text variable string inside of it. 
        // includes
        // convert both strings to lower case

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });

}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        
    })
    );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'Dress', amount: 50, createdAt: -2100}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -2100}));
// //remove by id
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(1200));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


const demoState = {
    expenses: [{
        id: 'random',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};




