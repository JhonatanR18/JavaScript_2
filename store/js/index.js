// formatear Precios
function formatPrice(precio){
    return `S/ ${precio.toLocaleString('es-PE',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}
// filter Products
const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
let searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", event=>captureText(event))

// layout icons
let iconsTemplate = printIcons()
const iconsSelector = document.querySelector('#icons')
iconsSelector.innerHTML = iconsTemplate

// printCards
printCards(products, "products")