for (let numero = 0; numero < 12; numero += 2) {
  console.log(numero);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let resultado = 1;
for (let contador = 0; contador < 10; contador += 1) {
  resultado *= 2;
}
console.log(resultado);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CICLO DE DISMINUCIÓN CON ACCESO A UN CARACTER DE UN STRING.
let apellido = "Zapata";
for (let i = 5; i >= 0, i--) {
    console.log(apellido[i]);
}