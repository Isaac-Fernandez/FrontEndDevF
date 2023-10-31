// EN JSON, LAS PROMESAS SON OBJETOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE
// EN UN TIEMPO INDEFINIDO. POR NATURALEZA, SON ESTRUCTURAS ASINCRONAS

//1. CREAR LA ESTRUCTURA DE  UNA PROMESA
const promesa = new Promise(function (resolve, reject) {
    // LAS PROMESAS CONTIENEN DOS METODOS
    resolve() //DEVOLVER UN VALOR CUANOD LA PROMESA SE CUMPLE
    reject() //DEVOLVER UN VALOR O CUALQUIER TIPO DE DATO CUANDO LA PROMESA SE RECHAZA
})

// 2. CONSUMIR LA PROMESA
promesa.then(function (response) {
    //codigo
    console.log(response);
}).catch(function (error) {
    console.error(error)
})