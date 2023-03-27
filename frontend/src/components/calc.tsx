import { FunctionComponent, useEffect, useState } from "react";
import Create from "./create";
import List from "./list";
import DBdata from "../data.json"
import axios from "axios";
 
const Calc: FunctionComponent = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get('/api/list-data')
            setData(response)
        }
        FetchData()
    }, [])
    console.log(data)
    
    return (
    <div className="calc">
        <List data={DBdata["Kalle"]}/>
        <Create/>
    </div>
    );
}
 
export default Calc;