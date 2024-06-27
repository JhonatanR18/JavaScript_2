// Definición de variables con información del usuario
const nombre = "Jhonatan Rivera";
const edad = 20;
const profesión = "Administrador de Empresas";
const país = "Perú";
const departamento = "Piura"
const provincia = "Sullana"

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
    // Si isOnline es true, muestra una alerta indicando que el usuario está conectado y también se mostrara el template
    alert(`El usuario esta conectado.`);
    document.write(`¡Hola Mi nombre es ${nombre}! Tengo ${edad} años de edad, soy de ${país}, ${departamento} - ${provincia}, y actualmente estudiante de la carrera de ${profesión}.`)
} else{
    // Si isOnline es false, muestra una alerta indicando que el usuario no está conectado
    alert(`El usuario no está conectado`)
}