// Verificar si 'isOnline' está definido en localStorage; si no, establecerlo como 'false'
if (localStorage.getItem('isOnline') === null){
    localStorage.setItem('isOnline', 'false')
}
// Función para renderizar los íconos basados en el estado 'isOnline'
function renderIcons () {
    // Obtener el estado actual de 'isOnline' desde localStorage
    const isOnline = localStorage.getItem('isOnline') === 'true';
    // console.log(isOnline); // Imprimir el estado actual en la consola
    // Obtener referencias a los elementos de íconos desde el DOM
    const iconFb = document.getElementById('iconFb');
    const iconIg = document.getElementById('iconIg');
    const iconCart = document.getElementById('iconCart');
    const iconFav = document.getElementById('iconFav');
    const iconLogin = document.getElementById('iconLogin');
    const iconUser = document.getElementById('iconUser');
    const iconFbFixed = document.getElementById('iconFb-fixed');
    const iconIgFixed = document.getElementById('iconIg-fixed');

    // Actualizar clases para mostrar/ocultar íconos basado en el estado 'isOnline'
    if (isOnline){
        iconCart.classList.remove('hidden'); // muestra el icono de cart
        iconFav.classList.remove('hidden'); // muestra el icono de fav
        iconLogin.classList.add('hidden'); // oculta el login
        iconUser.classList.remove('hidden') // muestra el icon user
        iconFbFixed.classList.remove('hidden'); // muestra el ícono de Facebook (fijo)
        iconIgFixed.classList.remove('hidden'); // muestra el ícono de Instagram (fijo) 
    } else {
        iconFb.classList.remove('hidden'); // muestra el icono de facebook
        iconIg.classList.remove('hidden'); // muestra el icono de instagram
        iconCart.classList.add('hidden'); // oculta el icono de cart
        iconFav.classList.add('hidden'); // oculta el icono de fav
        iconLogin.classList.remove('hidden'); // muestra el icono de login
        iconUser.classList.add('hidden'); // oculta el icono de user
    }
}

function setupEventListeners(){
    // Event listener para el botón de login
    document.getElementById('iconLogin').addEventListener('click', function(){
        // Cambiar 'isOnline' a 'true' en localStorage al hacer clic en login
        localStorage.setItem('isOnline', 'true');
        renderIcons(); // Llamar a renderIcons para actualizar la interfaz
    });
    // Event listener para el botón de usuario
    document.getElementById('iconUser').addEventListener('click', function(){
        // Cambiar 'isOnline' a 'false' en localStorage al hacer clic en usuario
        localStorage.setItem('isOnline', 'false');
        renderIcons(); // Llamar a renderIcons para actualizar la interfaz
    });
    // Llamar a renderIcons inicialmente cuando se carga la página
    document.addEventListener('DOMContentLoaded', renderIcons)
}

export {setupEventListeners}