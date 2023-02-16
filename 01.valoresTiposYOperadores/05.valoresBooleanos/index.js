let santiago = 17;
let alejandro = 18;
let andres = 19;

console.log("Santiago es mayor de edad:", santiago >= 18);
console.log("Alejandro tiene 18 años:", alejandro === 18);
console.log("Andrés es menor de edad:", andres < 18);
console.log("Santiago tiene la misma edad que Andrés:", santiago !== andres);
console.log("Santiago no tiene la misma edad que Andrés:", !(santiago !== andres));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// LOS STRINGS TAMBIÉN PUEDEN SER COMPARADOS:
console.log("Ab" < "Za");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PREFIJOS PARA TRABAJAR CON DIFERENTES SISTEMAS DE NUMERACIÓN.

// Binarios: 0-1 --> Prefijo: 0b
console.log(0b01000001 < 0b01011010);

// Octales: 0-7 --> Prefijo: 0
console.log(0101 < 0132);

// Decimales: 0-9 --> Sin prefijo
console.log(65 < 90);

// Hexadecimales: 0-9 a-f --> Prefijo: 0x
console.log(0x41 < 0x5a);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// OPERADORES LÓGICOS.

// and --> &&
console.log("true && false:", true && false);
console.log("true && true:", true && true);
console.log("false && false:", false && false);
console.log("18 > 10 && 20 < 40:", 18 > 10 && 20 < 40);

// or --> ||
console.log("false || true:", false || true);
console.log("false || false:", false || false);

// not --> !
console.log("!true:", !true);
console.log("!18 > 10:", !18 > 10);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EJEMPLO DE USO DE OPERADORES LÓGICOS CON OPERADORES DE ARITMÉTICA Y COMPARACIÓN:
console.log("1 + 1 == 2 && 10 * 10 > 50:", 1 + 1 == 2 && 10 * 10 > 50);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// OPERADOR TERNARIO --> ?
console.log(!false ? 1 : 2);
console.log(!true ? 1 : 2);