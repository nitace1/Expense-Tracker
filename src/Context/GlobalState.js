import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initalState = {
  transaction: [],
};
export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({children}) =>
{
    const[state,dispatch] = useReducer(AppReducer, initalState);

    function deleteTransaction(id)
    {
      dispatch({
        type: 'DELETE_TRANS',
        payload: id
      });

    }
    function addTransaction(transactions)
    {
      dispatch({
        type: 'ADD_TRANS',
        payload: transactions
      });

    }

    return(<GlobalContext.Provider value={
        {transaction : state.transaction,
        deleteTransaction,
      addTransaction}
    }> 
        {children}
    </GlobalContext.Provider>)
}