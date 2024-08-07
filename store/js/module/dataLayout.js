const optionsNav = [
    {title: "Ofertas de la semana!", linkTo: "../html/details.html"},
    {title: "Productos", linkTo: "../html/details.html"},
    {title: "Contacto", linkTo: "../html/details.html"},
    {title: "Marcas", linkTo: "../html/details.html"}
]
const optionsFooter = [
    {title: "Ofertas", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Laptops", linkTo: "https://tailwindcss.com/"},
        {title: "Audio", linkTo: "https://tailwindcss.com/"},
        {title: "Auriculares", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Cómo comprar", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Formas de pago", linkTo: "https://tailwindcss.com/"},
        {title: "Envíos", linkTo: "https://tailwindcss.com/"},
        {title: "Devoluciones", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Costos y tarifas", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Impuestos", linkTo: "https://tailwindcss.com/"},
        {title: "Facturación", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Mis pedidos", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Pedir Nuevamente", linkTo: "https://tailwindcss.com/"},
        {title: "Lista de deseos", linkTo: "https://tailwindcss.com/"},
    ]},
    {title: "Garantía de Entrega", linkTo: "https://flexboxfroggy.com/#es", cols: [""]},
]
function optionIcons(){
    return `
    <ul>
        <li id="iconFb-fixed" class="social-icon hidden"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li id="iconIg-fixed" class="social-icon hidden"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li id="iconFb" class="iconFb hidden"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li id="iconIg" class="iconIg hidden"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li id="iconCart" class="iconCart hidden"><a href="../html/cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
        <li id="iconFav" class="iconFav hidden"><a href="../html/favorites.html"><i class="fa-regular fa-star"></i></a></li>
        <li id="iconLogin" class="iconLogin hidden"><a href=""><i class="fa-solid fa-right-to-bracket"></i></a></li>
        <li id="iconUser" class="iconUser hidden"><a href=""><i class="fa-solid fa-user-check"></i></a></li>
    </ul>
    `
}

export{optionsNav, optionsFooter, optionIcons}