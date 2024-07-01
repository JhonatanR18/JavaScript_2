import { functionArea } from "./area.js";
import { functionPerímetro } from "./perimeter.js";
// define tres objetos que representen rectángulos, cada uno con propiedades de altura y ancho.
const rectángulos = {
    Rectángulo_01: {ancho: 15, altura: 10},
    Rectángulo_02: {ancho: 20, altura: 10},
    Rectángulo_03: {ancho: 30, altura: 15},
}
// variable para acumular el contenido HTML
let acumularAreas = "";
// Itera sobre las propiedades del objeto rectángulos
for(const key in rectángulos){
    // Obtiene cada rectángulo del objeto "rectángulos"
    const calcular = rectángulos[key];
    // Calcula el área del rectángulo actual usando la función "functionArea"
    const area = functionArea(calcular);
    // Calcula el perímetro del rectángulo actual usando la función "functionPerímetro"
    const perímetros = functionPerímetro(calcular);    
    // Acumula el contenido HTML con la información del área de cada rectángulo.
    acumularAreas = acumularAreas + `
    <tr>
        <td>${key}</td> 
        <td>${area}</td>
        <td>${perímetros}</td>
    </tr>
    `
}
/// Utilizamos `+=` para agregar dinámicamente las filas calculadas.
// Esto permite añadir nuevas filas de datos sin reemplazar el contenido existente de la tabla.
document.getElementById('area').innerHTML += acumularAreas
