import { printNav, printFooter, printIcons } from "./module/layout.js";
import { setupEventListeners } from "./module/isOnline.js";
import { printDetails } from "./module/printDetails.js";
import { changeMini } from "./module/changeMini.js";
import { subTotal } from "./module/changeSubtotal.js";
import { saveProduct } from "./module/saveProduct.js";
// Captura el parámetro id utilizando las propiedades y métodos de la teoría.
const query = location.search;
// URLSearchParams define métodos útiles para trabajar con la cadena de consulta de una URL.
const params = new URLSearchParams(query);
const id = params.get('id')
// Layout
printNav()
printFooter()
// layout icons
printIcons()
// isOnline
setupEventListeners()
// printDetails
printDetails(id)

// Haz disponible la función globalmente
window.changeMini = changeMini;
window.subTotal = subTotal;
window.saveProduct = saveProduct;