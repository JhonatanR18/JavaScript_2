let favProducts = JSON.parse(localStorage.getItem('fav')) || []
console.log(favProducts);
// formatear precios
function formatPrice(precio){
    return `S/ ${precio.toLocaleString('es-PE',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}
// layout icons
let iconsTemplate = printIcons()
const iconsSelector = document.querySelector('#icons')
iconsSelector.innerHTML = iconsTemplate
// ----
printFav(favProducts, "fav-container")
