import { FunctionComponent } from "react";

interface ListProps {
    data: {summa:number, selgitus:string}[]
}


const List: FunctionComponent<ListProps> = (props) => {


    return (
    <div className="list">
        {props.data.map((ob:{summa:number, selgitus:string}) => 
                <div className="list-item" key={props.data.indexOf(ob)}>
                    <div>{ob.summa}</div> - <div>{ob.selgitus}</div>
                </div>)
        }
        <div className="list-sum">
            <div>Summa: {}</div> 
        </div>
    </div>
    );
}
 
export default List