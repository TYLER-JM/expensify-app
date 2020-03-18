import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visEx = getVisibleExpenses(state.expenses, state.filters);
  console.log(visEx);
});

// console.log(store.getState());

store.dispatch(addExpense({ description: 'gas bill', amount: 500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'water bill', amount: 500, createdAt: 1000 }));
store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));

