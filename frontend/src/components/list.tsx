import { FunctionComponent } from "react";
import { ListItem } from "./listItem";

interface ListProps {
    data: {_id?:any, selgitus?:string, summa?:string}[]
}
interface ListProp {
    _id?:any,
    selgitus?:string,
    summa?:string
}


const List: FunctionComponent<ListProps> = (props) => {

    const propsSum = () => {
        let sum = 0
        props.data.map((ob: ListProp) => sum = sum + parseFloat(ob.summa ? ob.summa : "0"))
        return sum.toFixed(2)
    }
    

    return (
    <div className="list prevent-select">
        {props.data.map((ob:ListProp) => 
                <ListItem summa={ob.summa} selgitus={ob.selgitus} itemId={ob._id} key={ob._id}/>
        )}
        <div className="list-sum">
            <div><>Summa: {propsSum()}</></div> 
        </div>
    </div>
    );
}
 
export default List