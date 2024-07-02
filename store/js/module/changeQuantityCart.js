// ProductCart LocalStorage
let cartProducts = JSON.parse(localStorage.getItem('cart')) || []
import { printCart } from "./printCart.js";
import { createTotal } from "./createTotalCart.js";
function changeQuantity(event){
    const [id, color] = event.target.id.split("_");
    const quantity = parseInt(event.target.value);
    cartProducts.forEach(each => {
        if (each.id == id && each.colors == color){
            each.quantity = quantity
            each.subTotal = each.quantity * each.price
        }
    })
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    printCart(cartProducts, "cart-container")
    createTotal(cartProducts)
}
export {changeQuantity}