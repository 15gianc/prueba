//Arrays-Arreglos
//Son estructuras de datos
//Cuando tengo mas de un solo valor utilizo arrays
//Array vacio
let personas = [];

//Array con datos

let animales = ["Perro","Gato","Serpiente","Lobo","Escorpion","Conejo"]
//Posiciones :    0        1       2          3        4          5
//Items:          1        2       3          4        5          6

// console.log(animales.length); //length indica la cantidad exacta de items que hay en el array
// console.log(animales);


//Recorrer Array con For
//El for nos permite sacar todos los items de la lista y guardarlos en otro lado


// for(let i = 0; i < animales.length; i++){

//     //En el array animales que item tiene la posicion i que inicia en 0
//     console.log(animales[i]);
// }


//animales[6] = "Dragon" //agregamos un nuevo item si conocemos cual es la ultima posicion
//animales[4] = "Dragon" //Si no conocemos la posicion que ya existe, se reemplaza el valor


// for (let i = 0; i < animales.length; i++) {
//     console.log(animales[i]);    

// }
// console.log(animales[1] animales[4]);


//Metodos de Arrays
//El push agrega elementos al final del array
//unshift agrega elementos al principio del array
//pop elimina el ultimo elemento
//shift elimina el primer elemento
//delete animales [5]; // no usar este metodo
//splice para eliminar elementos, se le especifica la posicion y la cantidad de item que se desea eliminar


animales.splice()
animales.push("Ardilla");
animales.unshift("Tigre");
animales.pop();
animales.shift();
    //primero la posicion y luego la cantidad de items que quiero eliminar
animales.splice(3,2)

for(let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}




