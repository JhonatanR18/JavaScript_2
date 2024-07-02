import { formatPrice } from "./formatPrice.js";
function createTotal (arrayOfProducts){
    let total = 0;
    arrayOfProducts.forEach(each => {
        total = total + (each.price * each.quantity)
    });
    const cartTotal = document.querySelector("#cart-total")
    cartTotal.innerHTML = "";
    if (arrayOfProducts.length > 0 ){
        cartTotal.innerHTML = `
        <div id="total" class="cart-total">
            <div class="total-info">
                <h2 class="title">Resumen del Pedido</h2>
                <div class="container-total">
                    <span class="total-title">Total</span>
                    <span id="id-price" class="total-price">${formatPrice(total)}</span>
                </div>
                <span class="tax-policy">Incluye impuesto PAÍS y porcentaje AFIP.</span>
                <div class="btn-primary">
                    <button onclick="buySelector()" id="buy-button" class="button-buy">Comprar</button>
                </div>
            </div>
        </div>
        `;
    }
}
export {createTotal}