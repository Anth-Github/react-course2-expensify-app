import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListFilter from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilter />
    <ExpenseList />
    </div>
);


export default ExpenseDashboardPage;