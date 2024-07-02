const numero1 = Number(prompt(`Ingrese primer número:`));
const numero2 = Number(prompt(`Ingrese segundo número:`));

if(isNaN(numero1) || isNaN(numero2)){
    alert(`Error: Por favor, ingrese valores numéricos válidos.`)
} else {
    const dividir = (num1, num2) => num1 / num2;
    const imprimirEnConsola = (num1, num2, operación) => {
        if (num2 === 0){
            alert(`No se puede dividir entre 0`);
        } else {
            const resultado = operación(num1, num2)
            console.log(resultado);
            document.getElementById('división'). innerHTML = `
            <h1>Datos:</h1>
            <p>Dividendo: ${num1}</p>
            <p>Divisor: ${num2}</p>
            <h1>Resultado:</h1>
            <p>${resultado}</p>
            `
        }

    }
    imprimirEnConsola(numero1,numero2, dividir) 
}
