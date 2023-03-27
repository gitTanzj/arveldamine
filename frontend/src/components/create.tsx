import { FunctionComponent, useState } from "react";



const Create:FunctionComponent = () => {

    const [summa, setSumma] = useState("");
    const [selgitus, setSelgitus] = useState("");

    const handleSubmit = () => {
        
    }

    return (
        <div className="create">

            <form id="createForm" className="forms" onSubmit={handleSubmit}>
                <input type="text" placeholder="Summa.." pattern="^[0-9]+.[0-9]{2}$" onChange={(event) => { setSumma(event.target.value); } } />
                <input type="text" placeholder="Selgitus.." onChange={(event) => { setSelgitus(event.target.value); } } />
                <button type="submit">Lisa</button>
            </form>

        </div>
        );

}

export default Create