import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('Should setup edit expense action object', () => {
  const editedExpense = editExpense('abc', {note: 'new note'});
  expect(editedExpense).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      note: 'new note'
    }
  })
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('Should setup the add expense object with the default values', () => {
  const defaultValues = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  const defaultAction = addExpense();
  expect(defaultAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...defaultValues
    }
  })
});