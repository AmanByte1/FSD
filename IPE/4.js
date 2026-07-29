import { createContext } from "react";

import C1 from "./c1";

export const colorContext = createContext();

function p(){
    return (
        <colorContext.Provider value={{
            font:"yellow",
            bg:"red"
        }}>
            <C1/>
        </colorContext.Provider>
    );
}
export default p;