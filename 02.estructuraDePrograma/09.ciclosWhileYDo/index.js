let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero += 2;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let resultado = 1, contador = 0;
while (contador < 10) {
  resultado *= 2;
  contador += 1;
}
console.log(resultado);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let tuNombre;
do {
  tuNombre = prompt("Cuál es tu nombre?");
} while (!tuNombre);
console.log("Soy:", tuNombre);