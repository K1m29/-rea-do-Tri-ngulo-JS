function calcularArea() {

    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML =
        "A área do triângulo é: " + area;
}