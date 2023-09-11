import { createContext, useState } from "react";

const Context = createContext();
export const INITIAL_LIMIT = 16;

function AuthProvider( {children} ) {       

    const [isActiveMenuMobile, setActiveMenuMobile] = useState(false);
    const [isActiveCart, setActiveCart] = useState(false);
    const [limitProducts, setLimitProducts] = useState(INITIAL_LIMIT);

    const openMenuMobile = () => { 
        setActiveMenuMobile(!isActiveMenuMobile);
    };

    const openCart = () => { 
        setActiveCart(!isActiveCart);
    };


    const data = {
        INITIAL_LIMIT,
        isActiveMenuMobile,
        isActiveCart,
        limitProducts,
        setLimitProducts,
        openMenuMobile,
        openCart,
    }

    return <Context.Provider value={data} >
        {children}
    </Context.Provider>
}

export {AuthProvider}; 
export default Context;