import { products } from "./module/products.js";
import { captureText } from "./module/filterProducts.js";
import { printNav, printFooter, printIcons } from "./module/layout.js";
import { printCards } from "./module/printCards.js";
import { setupEventListeners } from "./module/isOnline.js";
// printCards
printCards(products, "products")
// filter Products
let searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", event=>captureText(event))
// Layout
printNav()
printFooter()
// layout icons
printIcons()
// isOnline
setupEventListeners()