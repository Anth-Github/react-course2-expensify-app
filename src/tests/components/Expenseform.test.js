import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/Expenseform';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render expense form correctly', () => { 
    const wrapper = shallow(<ExpenseForm  />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expenses from correctly with expense data', () => {  
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission', () => { 
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {preventDefault: () => { }});
    
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test('should set description on input change', () => { 
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper).state('description').toBe(value);
});


test('should set note on textarea change', () => {
    const value = 'New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper).state('note').toBe(value);
 });

 // should set amount if valid input. 
 test('should set amount if valid input', () => { 
     const value = '23.50';
     const wrapper = shallow(<ExpenseForm />);
     wrapper.find('input').at(1).simulate('change', {
         target: {value}
     })
     expect(wrapper.state('amount')).toBe(value);
 })

 // should not set amount if invalid input. 

 test('should not set amount if invalid input', () => { 
    const value = '12.12.1';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.start('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
});


test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').props('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus onChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').props('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});