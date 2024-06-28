function createCard(product) {
    const priceDiscount = formatPrice(product.priceWithDiscount)
    const priceNormal = formatPrice(product.normalPrice)
    return `
        <article class="product-card">
        <a href="../html/details.html?id=${product.id}">
            <div class="conProductImg"><img class="product-img" src="${product.photo[0]}" alt="${product.id}"> </div>
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.observation}</span>
                <div class="product-price-block">
                    <span class="normal-price">${priceNormal}</span>
                    <span class="price-with-discount">${priceDiscount}</span>
                </div>
                <div class="product-tax-policy">${product.taxPolicy}</div>
            </div>
            <div class="product-discount">${product.onsale}</div>
        </a>
        </article>
    `;
}