import {useContext} from "react";
import { colorContext } from "./4";

function C2() {
        const {font,bg}=useContext(colorContext)
    return (
        <div style={{color:font,backgroundColor:bg}}>C2</div>
    )
}
export default C2;