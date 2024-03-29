import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

/**
 * this stateless functional component converted to class-based
 * so that onSubmit need not be rendered inline
 */
// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm 
//       onSubmit={(expense) => {
//         // props.dispatch(addExpense(expense))
//         props.addExpense(expense);
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);