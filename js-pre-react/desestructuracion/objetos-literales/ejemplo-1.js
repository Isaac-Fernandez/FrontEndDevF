// LA DESESTRUTURACION DE OBJETOS LITERALES EN JS, TE PERMITEN EXTRAER PROPIEDADES DE UN OBJETO Y ASIGNARLAS
// A VARIABLE/CONSTANTES INDIVIDUALES DE MANERA MAS CONVENIENTE

const persona = {
    nombre: "Cinthya",
    edad: 20, 
    ciudad: "La mejor ciudad"
}

// DESESTRUTURACION
let {nombre, edad, ciudad}= persona

console.log(nombre);