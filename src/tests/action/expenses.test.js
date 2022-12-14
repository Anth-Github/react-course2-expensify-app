import { removeExpense, editExpense, addExpense } from "../../actions/expenses";


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abcde' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abcde'
    });
});


// test('should setup edit expense action object', () => {
//     const action = editExpense('123abc', { note: 'new note values' });
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123abc', 
//         updates: {
//             note: 'new note values'
//         }
//     })
// });


// test('should setup add expense action object value with provided values', () => {
//     const expenseData = {
//         description: 'Rent',
//         amount: 109500,
//         createdAt: 1000, 
//         note: 'this was last months rent'
//     }

//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE', 
//         expense: {
//             ...expenseData, 
//             id: expect.any(String)
//         }
//     })
// })


// test('should expense add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE', 
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })

// })


























