import { FunctionComponent } from 'react'
import { useExpensesContext } from '../hooks/useExpensesContext'

interface ListItemProps {
    summa?:string
    selgitus?:string
    itemId?:any
}

export const ListItem:FunctionComponent<ListItemProps> = (props) => {

    const { dispatch, expenses } = useExpensesContext()

    const handleDelete = async () => {
        const data = { id:props.itemId }

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('/api/delete_data', requestOptions)
                .then(response => response.json())
                .then(dispatch({type:"DELETE_EXPENSE", payload:data.id}))
    }

    return (
        <div className="list-item">
            <div className="list-item-content">
                <div>{props.summa}</div> - <div>{props.selgitus}</div>
            </div>
            <button className="list-item-button" onClick={handleDelete}>X</button>
        </div>

    )
}