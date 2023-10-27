// EN BASE A "esDiaLaborable", DEFINIR SI "Nos sabemos la de chambear | trabajar o descansar"

const esDiaLaborable = true

// EXPECTED OUTPUT/SALIDA ESPERADA EN LA CONSOLA : "trabajar" o "Descansar"
const mensaje = (esDiaLaborable === true) ? "te la sabritas" : "Consiga su primera chamba"
console.log(mensaje);

// NOTA : INVESTIGAR VALORES TRUTHY Y FALSY
