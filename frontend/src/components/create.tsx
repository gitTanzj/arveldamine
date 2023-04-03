import { FormEvent, FormEventHandler, FunctionComponent, useState } from "react";
import axios from 'axios'


const Create:FunctionComponent = () => {
    const [summa, setSumma] = useState("");
    const [selgitus, setSelgitus] = useState("");

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        

        // alert(`${summa}, ${selgitus}`)
        
        const data = {
            summa: summa,
            selgitus:selgitus
        }


        const response = await fetch('api/list-data/kalle',{
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        console.log(json)
    }

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