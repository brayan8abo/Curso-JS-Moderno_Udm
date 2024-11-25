// alert('Hola mundo');

// const nombre = prompt("¿Cuál es tu nombre?"); //el prompt sería tipo scanner...
// document.querySelector( //esto me sirve para hacer referencia a algun elemento del HTML para hacer algun cambio
//   ".contenido"
// ).innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;

//Asigna el valor a la variable producto
const producto = "Monitor 24 pulgadas";
console.log(`${producto}`);
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
// console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido")
console.timeEnd('Hola')
