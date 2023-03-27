import { FunctionComponent } from "react";

interface HeaderProps {
    text:string
}
 
const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
    <div className="header">
        <h1>{props.text}</h1>
    </div>
    );
}
 
export default Header;