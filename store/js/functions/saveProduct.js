function saveProduct(id){
    const product = products.find(product => product.id == id)
    const quantity = parseFloat(document.querySelector("#quantity-1").value)
    const subTotal = quantity * product.priceWithDiscount;
    const objectProduct = {
        id: product.id,
        title: product.title,
        photo: product.photo[0],
        price: product.priceWithDiscount,
        subTotal: subTotal,
        colors: document.querySelector("#color").value,
        quantity: quantity,
        description: product.description
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(p => p.id == objectProduct.id && p.colors == objectProduct.colors);
    if(existingProduct){
        existingProduct.quantity += objectProduct.quantity;
        existingProduct.subTotal = existingProduct.quantity * existingProduct.price;
        alert(`${product.title} ya está en el carrito. Cantidad actualizada.`);
    } else {
        cart.push(objectProduct);
        alert(`${product.title} se agregado al carrito.`);
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}