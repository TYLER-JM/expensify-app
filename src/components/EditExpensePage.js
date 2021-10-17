import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.match.params.id, expense);
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.removeExpense({ id: this.props.match.params.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onclick}>
          Remove
        </button>
      </div>
    );
  }
}

/**
 * this stateless functional component commented out
 * in favour of the class-based component
 */
// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm 
//         expense={props.expense}
//         onSubmit={(expense) => {
//           // props.dispatch(editExpense(props.match.params.id, expense));
//           props.editExpense(props.match.params.id, expense);
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         // props.dispatch(removeExpense({ id: props.match.params.id }));
//         props.removeExpense({ id: props.match.params.id });
//         props.history.push('/');
//       }}
//     >
//       Remove
//     </button>
//     </div>
//   );
// }

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (expense) => dispatch(removeExpense(expense))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);