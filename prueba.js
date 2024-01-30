console.clear()

function show(htmlContent) {
    document.getElementById('content').innerHTML += htmlContent;
}

const suma = function(num1, num2) {
    return num1 + num2;
}

const resta = function(num1, num2) {
    return num1 - num2;
}

const multiplicacion = function(num1, num2) {
    return num1 * num2;
}

const division = function(num1, num2) {
    return num1 / num2;
}

function resultado (num1, num2, nombreOp, fn) {
    return `El resultado de la ${nombreOp} entre ${num1} y ${num2} es ${fn(num1, num2)}. <hr>`
}

show(resultado (2, 3, 'suma', suma));

show(resultado (6, 3, 'resta', resta));

show(resultado (1, 8, 'multiplicacion', multiplicacion));

show(resultado (9, 2, 'division', division));