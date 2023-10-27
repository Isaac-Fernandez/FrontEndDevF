// CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVARLE UN HELADO 
// SI LA HELADERIA ESTA ABIERTA

let heladeriaAbierta = false
// FORMAS DE USAR PROMESAS
// 1.CREAR LAS REGLAS DE LA promesa. NOS PUEDE TOCAR HACERLO O NO

const traerHelado = new Promise(function (resolve, reject) {
    if (heladeriaAbierta){
        resolve("Then")
    }
})