function changeQuantity(event){
    const [id, color] = event.target.id.split("_");
    const quantity = parseInt(event.target.value);
    cartProducts.forEach(each => {
        if (each.id == id && each.colors == color){
            each.quantity = quantity
            each.subTotal = each.quantity * each.price
        }
    })
    localStorage.setItem('cart', JSON.stringify(cartProducts))
    printCard(cartProducts, "cart-container")
    createTotal(cartProducts)
}