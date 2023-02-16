let elNumero = Number(prompt("Digita un número"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raíz cuadrada de:", elNumero * elNumero);
} else {
  console.log("No digitaste un número");
}
console.log("Fin");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if (1 + 1 === 2) console.log("Es verdad");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let numero = Number(prompt("Digita un número"));
console.log(numero);

if (numero < 10) {
  console.log("El número es muy pequenio");
} else if (numero < 100) {
  console.log("El número es pequenio");
} else if (numero < 1000) {
  console.log("El número es mediano");
} else if (numero < 10000) {
  console.log("El número es grande");
} else if (numero < 100000) {
  console.log("El número es muy grande");
} else if (Number.isNaN(numero)) {
  console.log("No digitaste un número");
}