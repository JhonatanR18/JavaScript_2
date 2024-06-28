let favProducts = JSON.parse(localStorage.getItem('fav')) || []
console.log(favProducts);
// formatear precios
function formatPrice(precio){
    return `S/ ${precio.toLocaleString('es-PE',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}

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
// función printFav
function printFav(arrayProductsFav, idSelectorFav){
    let favTemplates = ""
    for(elements of arrayProductsFav){
        favTemplates = favTemplates + createFav(elements)
    }
    const favSelector = document.getElementById(idSelectorFav)
    favSelector.innerHTML = favTemplates

    // Si el fav está vacío (length === 0), se muestra el mensaje de "NO HAY PRODUCTOS AÑADIDOS A FAVORITOS" estableciendo el estilo display del elemento emptyMessage a block.
    const emptyMessage = document.getElementById('message-cart');
    if (arrayProductsFav.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}
printFav(favProducts, "fav-container")
