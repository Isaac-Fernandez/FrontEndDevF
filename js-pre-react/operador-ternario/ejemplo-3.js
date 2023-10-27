// RETORNAR UN VALOR EN UNA FUNCION

function esPAr (numero){
    //EN BASE A UNA CONDICION DE OPERADOR TERNARIO, RETORNAR: "Es par" o "Es impar"
    return numero % 2 ===0 ? "es par" : "es impar"
}

//EXPECTED OUTPUT EN LA COLA: "Es par" o "Es impar"
console.log(esPAr(3));