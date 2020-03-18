import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
// import RemoveExpense from './RemoveExpense';

const ExpenseListItem = ({description, amount, id, createdAt, dispatch}) => (
  <div>
    <h3>{description}</h3>
    <p>${amount / 100} - Created At: {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);