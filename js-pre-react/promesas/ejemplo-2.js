// CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVARLE UN HELADO 
// SI LA HELADERIA ESTA ABIERTA

let heladeriaAbierta = false
// FORMAS DE USAR PROMESAS
// 1.CREAR LAS REGLAS DE LA promesa. NOS PUEDE TOCAR HACERLO O NO

const traerHelado = new Promise(function (resolve, reject) {
    //LOGICA DE LA PROMESA
    if (heladeriaAbierta){
        resolve("Ten, te traje un helado porque estaba abierta la heladeria")

    }else{
        reject("No te traje el helado, porque no estaba abierta la heladeria")
    }
})

// 2. RECIBIR PROMESAS COMO RESPUESTA
traerHelado.then(function(response){
    //codigo...
    console.log(response);
}).catch(function(error){
    console.error("HELADERIA BONITA: " + error);
})