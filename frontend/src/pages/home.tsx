import { FunctionComponent } from "react";
import Calc from "../components/calc";
import Header from "../components/header";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = (props) => {
    return (
    <>
        <Header text="Arveldamine"/>
        <Calc/>
    </>
    );
}
 
export default Home;