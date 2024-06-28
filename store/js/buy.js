// Función ya definida en el evento onclick del button
function buySelector(){
    // borra los productos del localStorage
    localStorage.removeItem('cart');
    // actualiza la lista de productos del carrito (ahora debería estar vacía)
    cartProducts = [];
    // volvemos a imprimir el carrito y el total
    printCard(cartProducts, 'cart-container');
    createTotal(cartProducts)
}