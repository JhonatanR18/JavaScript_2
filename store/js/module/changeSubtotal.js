import { formatPrice } from "./formatPrice.js";
import { products } from "./products.js";
function subTotal(event, id){
    const cantidadDefinida = event.target.value;
    const product = products.find(each => each.id == id)
    const priceNormalSelector = document.querySelector("#price-nor")
    const subTotalNor = cantidadDefinida * product.normalPrice
    priceNormalSelector.innerHTML = formatPrice(subTotalNor)
    const priceSelector = document.querySelector("#price-des")
    const subTotalDes = cantidadDefinida * product.priceWithDiscount
    priceSelector.innerHTML = formatPrice(subTotalDes)
}
export{subTotal}