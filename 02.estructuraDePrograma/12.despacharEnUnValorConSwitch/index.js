let clima = prompt("Cómo está el clima? \n-Soleado\n-Nublado\n-Lluvioso");
switch (clima) {
  case "Soleado":
    console.log("Vístete con poca ropa");
    break;
  case "Nublado":
    console.log("Ve afuera");
    break;
  case "Lluvioso":
    console.log("Lleva paraguas");
    break;
  default:
    console.log("Tipo de clima desconocido");
    break;
}