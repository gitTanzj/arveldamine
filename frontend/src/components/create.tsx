import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useExpensesContext } from "../hooks/useExpensesContext";

const Create:FunctionComponent = () => {
    const {dispatch} = useExpensesContext()
    const [summa, setSumma] = useState("");
    const [selgitus, setSelgitus] = useState("");

    
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if(summa && selgitus){
            const data = {
                summa : summa,
                selgitus : selgitus
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch('/api/process_data', requestOptions)
                .then(response => response.json())
                .then(dispatch({type:"CREATE_EXPENSE", payload:data}))
            
            setSumma("")
            setSelgitus("")
    }}

    return (
        <div className="create">

            <form id="createForm" className="forms" onSubmit={handleSubmit}>
                <input type="text" placeholder="Summa.." pattern="^[0-9]+.[0-9]{2}$" onChange={(event) => { setSumma(event.target.value); }} value={summa} />
                <input type="text" placeholder="Selgitus.." onChange={(event) => { setSelgitus(event.target.value); }} value={selgitus} />
                <button type="submit">Lisa</button>
            </form>

        </div>
        );

}

export default Create