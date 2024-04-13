import PropTypes from 'prop-types';

import { Component } from 'react';
import TransactionTable from './styledComponents/table';
import TableHead from './styledComponents/tableHead';
import TableRow from './styledComponents/tableRow';

export default class TransactionHistory extends Component {
  render() {
    const { items } = this.props;
    return (
      <TransactionTable class="transaction-history">
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          ))}
        </tbody>
      </TransactionTable>
    );
  }
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
