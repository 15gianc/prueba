//Fechas - Objeto fecha javascript
//Js utilizara la zona horaria del navegador y mostrara una fecha como cadena de texto completo


/*los objetos de fecha se crean con el new Date()*/

/*siempre que se ejecuta el new, crea una nueva instancia de Date */
//fecha es un nuevo Date, es un clon
let fecha = new Date();
console.log(fecha);

let year = fecha.getFullYear(); //Date().getFullYear()
let mes = fecha.getMonth()+1; //siempre agregamos +1 al mes porque el programa cuenta desde 0
let dia = fecha.getDate();//getDay() nos obtiene un numero del dia de la semana (ejemplo: lunes (1) martes (2))
let hora = fecha.getHours() + ":" + fecha.getMinutes();
console.log(year + "/" + mes + "/" + dia + " " + hora);

/*El objeto Date() u objetos de fechas son estaticos, es decir que el tiempo de la computadora corre
 pero los objetos de fecha no */

 /*JS cuenta los meses de 0 a 11 
 Enero = 0
 Diciembre = 11*/