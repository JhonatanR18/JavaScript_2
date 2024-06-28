function saveFavorites(id){
    const product = cartProducts.find(product => product.id == id)
    const favProducts = JSON.parse(localStorage.getItem('fav')) || []
    if(!favProducts.some(p => p.id == product.id && p.colors == product.colors)){
        favProducts.push(product)
        localStorage.setItem('fav', JSON.stringify(favProducts))
        alert(`${product.title} se ha agregado a favoritos.`)
    } else {
        alert(`${product.title} ya esta en favoritos.`)
    }
}