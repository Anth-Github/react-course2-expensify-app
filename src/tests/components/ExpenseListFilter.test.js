import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListfilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListfilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters correctly', () => { 
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with alt data correctly', () => { 
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value ='rent';
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    
    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByDate).toHaveBeenLastCalled();
});

test('should sort by amount', () => {

    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('', () => {

});

test('', () => {

});
// should handle text change
// should sort by date
// should sort by amount
// should handle date changes
// should handle date focus change
