import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, id, createdAt, dispatch}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>${amount / 100} - Created At: {createdAt}</p>
    
  </div>
);

export default ExpenseListItem;