import { createCart } from "./createCart.js"

function printCart(arrayProductsLS, idSelector){
    let cartTemplates = ""
    for (const elements of arrayProductsLS){
        cartTemplates = cartTemplates + createCart(elements)
    }
    const cartSelector = document.getElementById(idSelector)
    cartSelector.innerHTML = cartTemplates

    const emptyMessage = document.getElementById('message-cart');
    if (arrayProductsLS.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}
export{printCart}