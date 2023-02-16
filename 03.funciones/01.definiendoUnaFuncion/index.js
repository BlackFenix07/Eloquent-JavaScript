// FUNCIÓN PARA CALCULAR EL CUADRADO DE UN NÚMERO.
const cuadrado = function (x) {
  return x * x;
};
console.log(cuadrado(12));

// FUNCIÓN PARA HACER RUIDO.
const hacerSonido = function () {
  console.log("Pling!");
};
console.log(hacerSonido());

// FUNCIÓN PARA POTENCIAS.
const potencia = function (base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};
console.log(potencia(3, 10));

// OTRA MANERA DE DECLARAR UNA FUNCIÓN.
function nombreDeLaFuncion() {
  console.log("Soy otra función");
}

// ACCEDER A UNA POSICIÓN EN UNA CADENA DE TEXTO.
let nombre = "Andrés";
console.log(nombre[6]);

// RETO DE JS CHALLENGER.
function myFunction(a, n) {
  return a[n - 1];
}

console.log(myFunction("Santiago", 3)); // --> n
console.log(myFunction("ABCD", 1)); // --> a
console.log(myFunction("Andrés", 5)); // --> e