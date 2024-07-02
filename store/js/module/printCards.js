import { createCard } from "./productCards.js"
function printCards(arrayProductos, idSelector) {
    let productsTemplates = ""
    for (const elements of arrayProductos) {
        productsTemplates = productsTemplates + createCard(elements)
    }
    const productSelector = document.getElementById(idSelector)
    productSelector.innerHTML = productsTemplates
}

export {printCards}