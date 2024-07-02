import { removeDiacritics } from "./removeDiacritics.js";
import { printCards } from "./printCards.js";
import { products } from "./products.js";
const captureText = (event) =>{
    let text = event.target.value;
    let filterProductos = products.filter(product =>
        removeDiacritics(product.title.toLowerCase()).includes(text.toLowerCase()) || 
        removeDiacritics(product.observation.toLowerCase()).includes(text.toLowerCase()))
        printCards(filterProductos, "products")
}
export {captureText}