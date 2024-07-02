// ProductCart LocalStorage
let cartProducts = JSON.parse(localStorage.getItem('cart')) || []
import { printNav, printFooter, printIcons } from "./module/layout.js";
import { setupEventListeners } from "./module/isOnline.js";
import { printCart } from "./module/printCart.js";
import { createTotal } from "./module/createTotalCart.js";
import { changeQuantity } from "./module/changeQuantityCart.js";
import { buySelector } from "./module/buy.js";
import { saveFavorites } from "./module/saveFavorites.js";
// layout
printNav()
printFooter()
printIcons()
// isOnline
setupEventListeners()
// ----
printCart(cartProducts, "cart-container")
createTotal(cartProducts)

window.changeQuantity = changeQuantity;
window.buySelector = buySelector
window.saveFavorites = saveFavorites
