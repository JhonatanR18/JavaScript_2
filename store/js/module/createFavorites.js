import {formatPrice} from "./formatPrice.js"
function createFav (product){
    return `
        <article id="cart-products" class="cart">
        <div class="cart-img">
        <img src="${product.photo}" alt="${product.id}">
        </div>
        <div class="cart-info">
            <h3 class="cart-title">${product.title}</h3>
            <span class="cart-color">${product.colors}</span>
            <span class="cart-description">${product.description}</span>
            <!-- <input id="${product.id}_${product.colors}" class="cart-quantity" type="number" onchange="changeQuantityFav(event)" value="${product.quantity}"> -->
        </div>
        <div class="cart-price">
            <span id="price-nor" class="cart-price-discount">${formatPrice(product.price)}</span>
            <!-- <span id="price-total" class="cart-price-discount">${formatPrice(product.price * product.quantity)}</span> -->
        </div>
    </article>
    `
}
export {createFav}