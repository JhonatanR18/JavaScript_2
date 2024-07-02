import { products } from "./products.js";
import { formatPrice } from "./formatPrice.js";
function printDetails(id){
    const product = products.find(each => each.id === id)
    const priceDiscount = formatPrice(product.priceWithDiscount)
    const priceNormal = formatPrice(product.normalPrice)
    const detailsTemplate = `
    <div class="product-images-block">
        <div class="thumbnail-container">
            ${product.photo.map(
                photo => `<img src="${photo}" alt="mini" onclick="changeMini(event)">`
            ).join("")}
        </div>
        <img id="big-img" class="main-img" src="${product.photo[0]}" alt="${product.id}">
    </div>
    <div class="product-description-block">
        <h1 class="titulo">${product.title}</h1>
        <span class="product-observation">${product.observation}</span>
        <form class="selector">
            <fieldset>
                <label class="label" for="color">Color</label>
                <select id="color" type="text" placeholder="Selecciona un color">
                <!-- .map en ese caso transforma cada color en una cadena HTML de una opción (<option>). -->
                    ${product.colors.map(
                        color => `<option value=${color}>${color}</option>`
                    ).join("")} <!-- Combina las cadenas en una sola cadena de texto -->
                </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>Descripción</h1>
            <p>${product.description}</p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Precio Exclusivo Web</span>
            <div class="checkout-price-block">
                <span id="price-nor" class="price-normal" data-value="${product.normalPrice}">${priceNormal}</span>
                <h2 id="price-des" class="checkout-total-price" data-value="${product.priceWithDiscount}" >${priceDiscount}</h2>
            </div>
            <p class="checkout-description">Incluye impuesto PAÍS y percepción AFIP. Podes recuperar AR$ 50711 haciendo la solicitud en AFIP.</p>
            <ul class="checkout-policy-list">
                <li>
                <span class="policy-icon"><img src="../assets/truck.png" alt="truck"></span>
                <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío.</span>
                </li>
                <li>
                <span class="policy-icon"><img src="../assets/plane.png" alt="plane"></span>
                <span class="policy-desc">Recibe aproximadamente en 10 y 15 días hábiles, seleccionando envío normal.</span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input id="quantity-1" type="number" value="1" onchange="subTotal(event, ${product.id})">
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline" onclick="saveProduct(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
        </div>  
    </div>
    `;
    const detailsSelector = document.querySelector("#productDetail")
    detailsSelector.innerHTML = detailsTemplate
}
export{printDetails}