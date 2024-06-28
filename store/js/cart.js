
let cartProducts = JSON.parse(localStorage.getItem('cart')) || []

// formatear precios
function formatPrice(precio){
    return `S/ ${precio.toLocaleString('es-PE',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}
function createCart (product){
    return `
    <article id="cart-products" class="cart">
        <div class="cart-img">
        <img src="${product.photo}" alt="${product.id}">
        </div>
        <div class="cart-info">
            <h3 class="cart-title">${product.title}</h3>
            <span class="cart-color">${product.colors}</span>
            <span class="cart-description">${product.description}</span>
            <input id="${product.id}_${product.colors}" class="cart-quantity" type="number" onchange="changeQuantity(event)" value="${product.quantity}">
        </div>
        <div class="cart-price">
            <span id="price-nor" class="cart-price-discount">${formatPrice(product.price)}</span>
            <span id="price-total" class="cart-price-discount">${formatPrice(product.price * product.quantity)}</span>
        </div>
        <div class="cart-fav" onclick=saveFavorites(${product.id})>
            <i class="fa-regular fa-star"></i>
        </div>
    </article>
    `
}   
function printCard(arrayProductsLS, idSelector){
    let cartTemplates = ""
    for (elements of arrayProductsLS){
        cartTemplates = cartTemplates + createCart(elements)
    }
    const cartSelector = document.getElementById(idSelector)
    cartSelector.innerHTML = cartTemplates
    
    // Si el carrito está vacío (length === 0), se muestra el mensaje de "NO HAY PRODUCTOS EN EL CARRITO" estableciendo el estilo display del elemento emptyMessage a block.
    const emptyMessage = document.getElementById('message-cart');
    if (arrayProductsLS.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}
printCard(cartProducts, "cart-container")

// print total
function createTotal (arrayOfProducts){
    // variable para almacenar el precio total
    let total = 0;
    // iterar sobre los productos del carrito
    arrayOfProducts.forEach(each => {
        // sumar el precio de cada producto al total
        total = total + (each.price * each.quantity)
    });
    // traer el selector del contenedor del total
    const cartTotal = document.querySelector("#cart-total")
    // limpiar el contenedor
    cartTotal.innerHTML = "";
    // verifica si el arrayOfProducts contiene elementos y si tiene ejecuta el bloque
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
createTotal(cartProducts)

// Cambia la cantidad de un producto en el carrito según la entrada del usuario.
function changeQuantity(event){
    // Divide el id del elemento objetivo en dos partes: id y color
    const [id, color] = event.target.id.split("_");
    // Obtiene la cantidad nueva del input y la convierte a número entero
    const quantity = parseInt(event.target.value);
    // Verifica si el producto actual coincide con el id y color obtenidos del evento
    cartProducts.forEach(each => {
        if (each.id == id && each.colors == color){
            // Actualiza la cantidad del producto en el carrito
            each.quantity = quantity
            // Calcula el nuevo subtotal del producto
            each.subTotal = each.quantity * each.price
        }
    })
    // guarda el carrito en el localStorage
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    // Renderizar los productos del carrito
    printCard(cartProducts, "cart-container")
    // Renderizar el total a pagar
    createTotal(cartProducts)
}
// guarda un producto en la lista de favoritos si no está previamente agregado, o muestra una alerta si ya está en favoritos.
function saveFavorites(id){
    // buscamos el producto en cartProducts que coincida con el id pasando como argumento la función saveFavorites
    const product = cartProducts.find(product => product.id == id)
    // obtiene los fav del lS. Si no hay productos guardados inicializa favProducts como un array vacío
    const favProducts = JSON.parse(localStorage.getItem('fav')) || []
    // some para verificar si el producto ya existe en favProducts que tenga el mismo id & color que el "product" actual
    // El "!" antes, verifica si no se encontró ningún producto en favoritos que coincida con "product" 
    if(!favProducts.some(p => p.id == product.id && p.colors == product.colors)){
        // si el producto no esta en favoritos ('!favProducts.some(...)' es verdadero)
        // se añade product al array favProducts utilizando push
        favProducts.push(product)
        // guarda el array actualizado
        localStorage.setItem('fav', JSON.stringify(favProducts))
        alert(`${product.title} se ha agregado a favoritos.`)
    } else {
        // muestra una alerta que dice que el producto ya esta en favoritos, que ya existe en favProducts
        alert(`${product.title} ya esta en favoritos.`)
    }
}