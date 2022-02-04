import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return <table className={s.table}>
    <thead >
      <tr>
        <th className={s.header}>Type</th>
        <th className={s.header}>Amount</th>
        <th className={s.header}>Currency</th>
      </tr>
      </thead>
   
      {items.map(transaction =>(
           <tbody key = {transaction.id} className={s.body}>
           <tr className={s.row}>
             <td className={s.data}>{transaction.type}</td>
             <td className={s.data}>{transaction.amount}</td>
             <td className={s.data}>{transaction.currency}</td>
           </tr>
         </tbody>
      ))}

</table>

}

TransactionHistory.propTypes ={
  items : PropTypes.array,
}