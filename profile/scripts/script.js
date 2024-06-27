const misDatosFísicos = {
    nombre: "Jhonatan Rivera",
    edad: 20, 
    dirección:{
        calle: "Madre de Dios",
        número: "#484",
        ciudad: "Sullana"
        },
    altura: "180 cm",
    peso:"",
    hobby: "Dibujar"
}
const perfilSelector = document.getElementById('perfil');
const contenidoPerfil = `
        <h1>${misDatosFísicos.nombre || "No especificado"}</h1>
        <p>Edad: ${misDatosFísicos.edad || "No especificado"}</p>
        <p>Dirección: ${misDatosFísicos.dirección.calle || "No especificado"}, ${misDatosFísicos.dirección.número || "No especificado"}, ${misDatosFísicos.dirección.ciudad || "No especificado"}.</p>
        <p>Altura: ${misDatosFísicos.altura || "No especificado"}</p>
        <p>Peso: ${misDatosFísicos.peso || "No especificado"}</p>
        <p>Hobby: ${misDatosFísicos.hobby || "No especificado"}</p>
`
perfilSelector.innerHTML = contenidoPerfil