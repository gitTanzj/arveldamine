import { FunctionComponent, useEffect } from "react";
import Create from "./create";
import List from "./list";
import axios from "axios";
import { useExpensesContext } from "../hooks/useExpensesContext";
 
const Calc: FunctionComponent = () => {
    const { expenses, dispatch } = useExpensesContext()

    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get('/api/list-data/kalle')
            dispatch({type:"SET_EXPENSES", payload: response.data})
        }
        FetchData()
    }, [])

    return (
    <div className="calc">
        <List data={expenses}/>
        <Create/>
    </div>
    );
}
 
export default Calc;