import { createContext, useState } from "react";

const Context = createContext();

function AuthProvider( {children} ) {       

    const [isActive, setActive] = useState(false);

    const openMenuMobile = () => { 
        setActive(!isActive);
    };

    const data = {
        isActive,
        openMenuMobile,
    }

    return <Context.Provider value={data} >
        {children}
    </Context.Provider>
}

export {AuthProvider}; 
export default Context;