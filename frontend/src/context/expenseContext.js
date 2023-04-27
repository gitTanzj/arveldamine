import { createContext, useReducer } from "react";

export const ExpensesContext = createContext()

export const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return {
                expenses: action.payload
            }
        case 'CREATE_EXPENSE':
            return {
                expenses: [action.payload, ...state.expenses]
            }
        case 'DELETE_EXPENSE':
            return {
                expenses: []
            }
        default:
            return state
    }
}

export const ExpensesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(expensesReducer, {
        expenses: []
    })
    
    return (
        <ExpensesContext.Provider value={{...state, dispatch}}>
            {children}
        </ExpensesContext.Provider>
    )
}