function printFav(arrayProductsFav, idSelectorFav){
    let favTemplates = ""
    for(elements of arrayProductsFav){
        favTemplates = favTemplates + createFav(elements)
    }
    const favSelector = document.getElementById(idSelectorFav)
    favSelector.innerHTML = favTemplates

    const emptyMessage = document.getElementById('message-cart');
    if (arrayProductsFav.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}