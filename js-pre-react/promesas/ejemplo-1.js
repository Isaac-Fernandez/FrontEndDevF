// EN JSON, LAS PROMESAS SON OBJETOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE
// EN UN TIEMPO INDEFINIDO. POR NATURALEZA, SON ESTRUCTURAS ASINCRONAS

// CREAR LA ESTRUCTURA DE  UNA PROMESA
const promesa = new Promise(function (resolve, reject) {
    // LAS PROMESAS CONTIENEN DOS METODOS
    resolve()
    reject()
})

// 2. CONSUMIR LA PROMESA
promesa.then(function (response) {
    //codigo
    console.log(response);
})