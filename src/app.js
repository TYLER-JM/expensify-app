import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();


// console.log(store.getState());

store.dispatch(addExpense({ description: 'gas bill', amount: 4500, createdAt: 4500 }));
store.dispatch(addExpense({ description: 'water bill', amount: 500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

