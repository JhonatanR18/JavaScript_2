// Definición de variables con información del usuario
const nombre = "Jhonatan Rivera";
const edad = 20;
const profesión = "Administrador de Empresas";
const país = "Perú";
const departamento = "Piura"
const provincia = "Sullana"

// variables que representaran los datos personales
const datosPersonales = {
    nombre,
    edad,
    profesión,
    país,
    departamento,
    provincia,
}

// Actividad: Implementando la Asignación con AND lógico (&&)
// Inicializa la variable isOnline como false, representando que el usuario no está conectado inicialmente
let isOnline = false
// Utiliza prompt() para preguntar al usuario si está conectado
// Convierte la respuesta a mayúsculas para evitar problemas de mayúsculas y minúsculas
const respuesta = prompt(`¿El usuario esta conectado? ¿SI O NO?`).toUpperCase();
// Verifica la respuesta del usuario
// Si la respuesta es "SI" y isOnline es false, cambia isOnline a true
if(respuesta.toUpperCase() === "SI" && !isOnline){
    isOnline = true;
}

// Dependiendo del estado de isOnline, muestra un mensaje diferente
if (isOnline){
    // Si isOnline es true, muestra una alerta indicando que el usuario está conectado y también se mostrara lo siguiente
    alert(`El usuario esta conectado.`);
    function datos(){
        return `
        <h1>Perfil de Usuario</h1>
        <p>Nombre: ${datosPersonales.nombre}</p>
        <p>Edad: ${datosPersonales.edad}</p>
        <p>Profesión: ${datosPersonales.profesión}</p>
        <p>País: ${datosPersonales.país}</p>
        <p>Departamento: ${datosPersonales.departamento}</p>
        <p>Provincia: ${datosPersonales.provincia}</p>
        `
    }
    function printDatos(){
        const datosSelector = document.querySelector('.datos-per')
        datosSelector.innerHTML = datos()
    }
    printDatos()
    // document.write(`¡Hola Mi nombre es ${datosPersonales.nombre}! Tengo ${datosPersonales.edad} años de edad, soy de ${datosPersonales.país}, ${datosPersonales.departamento} - ${datosPersonales.provincia}, y actualmente estudiante de la carrera de ${datosPersonales.profesión}.`)
} else{
    // Si isOnline es false, muestra una alerta indicando que el usuario no está conectado
    alert(`El usuario no está conectado`)
}