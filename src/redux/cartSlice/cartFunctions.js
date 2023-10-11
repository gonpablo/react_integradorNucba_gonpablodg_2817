export const addItemToCartProducts = (cartProducts, product) => {
    const productInCart = cartProducts.find((item) => {
        return item.id === product.id
    })

    if(productInCart) {
        return cartProducts.map((item) => {
            return item.id === productInCart.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        })
    } else {
        return [
            ...cartProducts,
            {
                ...product,
                quantity: 1
            }
        ]
    }
}


export const removeItemToCartProducts = (cartProducts, product) => {
    const searchProduct = cartProducts.find((item) => item.id === product.id);
    
    if(searchProduct.quantity > 1 ) {
        return cartProducts.map((item) => {
            return item.id === product.id
            ? { ...item, 
                quantity: item.quantity - 1 
              }
            : item;
        });
    } 
}


export const deleteItemToCartProducts = (cartProducts, product) => {
    const searchProductDelete = cartProducts.filter((item) => item.id !== product.id);
    return searchProductDelete; 
}



export const totalPriceProducts = (cartProducts) => {
    const totalPrice = cartProducts.reduce((acc, item) => {
        if(item.priceDiscount === null) {
           return acc += item.priceNormal * item.quantity;
        } else {
           return acc += item.priceDiscount * item.quantity;
        }
    }, 0)
    return totalPrice
}


export const totalQuantityProducts = (cartProducts) => {

    const totalQty = cartProducts.reduce((acc, item) => {
           return acc += item.quantity;
    }, 0)

    return totalQty
}
