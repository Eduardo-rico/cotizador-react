const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

//calcula el total a pagar segun la marca
const calcularMarca = (marca) => {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
};

//calcula el tipo de seguro a pagar
const obtenerPlan = (plan) => {
  return plan === "basico" ? 1.2 : 1.5;
};

//muestra primera letra mayuscula
const primerMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};

export { obtenerDiferenciaYear, calcularMarca, obtenerPlan, primerMayuscula };
