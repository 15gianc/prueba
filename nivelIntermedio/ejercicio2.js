let fecha = new Date();
console.log(fecha);

let year = fecha.getFullYear(); //Date().getFullYear()
let mes = fecha.getMonth()+1; //siempre agregamos +1 al mes porque el programa cuenta desde 0
let dia = fecha.getDate();//getDay() nos obtiene un numero del dia de la semana (ejemplo: lunes (1) martes (2))
let hora = fecha.getHours() + ":" + fecha.getMinutes();


// console.log(year + "/" + mes + "/" + dia + " " + hora);

//las plantillas de cadena de caracteres (backticks)
//Es una caracteristica de Js, para crear cadenas dinamicas faciles
//podemos interpolar facilmente valores variables a la cadena

//Insertar variables en una cadena de texto
let formatoFecha = `El dia es: ${dia} del mes ${mes} del año ${year} y la hora actual es ${hora} `;
// console.log(formatoFecha);
//insertando valores de variables a la cadena de texto
console.log(`El dia es: ${dia} del mes ${mes} del año ${year} y la hora actual es ${hora} `);


