function calcular() {
    'use strict';

    let valor = parseFloat(document.getElementById("input-valor").value.replace(",", "."));
    let resultado = 1.43947027493882 * Math.log(4076.92307692308 * Math.exp(1) ** (0.0954 * valor));
    let percent = (1 - (resultado - Math.floor(resultado))) * 100;
    let skill = Math.floor(resultado) + 1;

    document.getElementById("resultado").textContent = `${resultado.toFixed(2)} = ${percent.toFixed(2)}% para o ${skill}`
}