import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters should handle text change', () => {
  let text = 'bills';
  wrapper.find('input').simulate('change', {
    target: {value: text}
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('ExpenseListFilters should sort by date', () => {
  let filter = 'date';
  wrapper.find('select').simulate('change', {
    target: {value: filter}
  })
  expect(sortByDate).toHaveBeenCalled();
});
test('ExpenseListFilters should sort by amount', () => {
  let value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByAmount).toHaveBeenCalled();
});
test('ExpenseListFilters should handle date changes', () => {
  let startDate = altFilters.startDate;
  let endDate = altFilters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('ExpenseListFilters should handle date focus changes', () => {
  let calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});



