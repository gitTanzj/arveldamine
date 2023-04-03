import { FunctionComponent} from "react";

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
        return sum
    }
    

    return (
    <div className="list">
        {props.data.map((ob:ListProp) => 
                <div className="list-item" key={ob._id ? ob._id : 0}>
                    <div>{ob.summa}</div> - <div>{ob.selgitus}</div>
                </div>)
        }
        <div className="list-sum">
            <div><>Summa: {propsSum()}</></div> 
        </div>
    </div>
    );
}
 
export default List