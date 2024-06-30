// define un objeto con propiedades individuales como enPareja, conAmigos y conFamilia, cada una con al menos cinco hobbies
const hobbies = {
    enPareja: ['cocinar', 'bailar', 'ejercicio', 'viajar', 'juegos'],
    conAmigos: ['deportes', 'excursiones', 'juegos', 'cenar', 'fiesta'],
    conFamilia: ['cine', 'manualidades', 'jardinería', 'bicicleta', 'lectura']
}
console.log(hobbies);
// Desestructura las listas de hobbies 
const {enPareja, conAmigos, conFamilia} = hobbies
// Extrae el tercer hobby de la lista "enPareja" y el cuarto de la lista "conFamilia".
const {enPareja:[ , ,tercerHobbiesPareja], conFamilia: [ , , ,cuartoHobbiesFamilia]} = hobbies

// Manipula el DOM para mostrar el mensaje
document.getElementById('hobbies-seleccionados').innerHTML = `
    <p>Mi hobby favorito para hacer en pareja es <strong>${tercerHobbiesPareja}</strong>. Nos encanta mantenernos activos y saludables juntos. Para hacer en familia, mi hobby favorito es andar en <strong>${cuartoHobbiesFamilia}</strong>. Es una actividad divertida y nos permite disfrutar del aire libre y pasar tiempo de calidad juntos.</p>
`

// objeto con la propiedad hobbies, la cual contendrá un arreglo con todos los hobbies 
const todos = {hobbies:[...enPareja, ...conAmigos, ...conFamilia]}
console.log(todos);