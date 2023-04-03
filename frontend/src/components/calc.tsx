import { FunctionComponent, useEffect, useState } from "react";
import Create from "./create";
import List from "./list";
import axios from "axios";
 
const Calc: FunctionComponent = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get('/api/list-data/kalle')
            setData(response.data)
        }
        FetchData()
    }, [])
    return (
    <div className="calc">
        <List data={data}/>
        <Create/>
    </div>
    );
}
 
export default Calc;