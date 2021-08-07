import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import { Transaction } from './Transaction'

function TransactionList() {
  const{transaction} = useContext(GlobalContext)
    return (
        <>
        
           <h3>History</h3>
      <ul className="list">
         {transaction.map(transactions => ( <Transaction key={transactions.id} transactions={transactions} />))}
      </ul>
 
        </>
    )
}

export default TransactionList
