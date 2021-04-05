import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from  'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//should add an expense
test('should add an expense', () => {
  const expense = {
    id: 1234,
    description: 'coffee', 
    amount: 1099,
    createdAt: moment().valueOf(),
    note: 'I bought it'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test('should edit an expense', () => {
  const updates = {
    description: 'updated description'
  }
  const action = {
    type: 'EDIT_EXPENSE', 
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(updates.description);
});

// should not edit an expense if expense not found
test('should not edit an expense if expense not found', () => {
  const updates = {
    description: 'updated description'
  }
  const action = {
    type: 'EDIT_EXPENSE', 
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(expenses[0].description);
  expect(state).toEqual(expenses);
});