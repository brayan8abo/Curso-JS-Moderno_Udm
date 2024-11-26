const producto = 'Monitor 32 pulgadas';

//metodo para reemplazar 

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
//se le pasa lo que quiero cambiar y lo que va ser nuevo
console.log(producto.replace('Monitor','Monitor Curvo OLED'));

console.log(producto.slice(0,5)); //desde la letra 0 a la 5
// console.log(producto.slice(2,3)); 
// console.log(producto.slice(4,5)); 

//
console.log(producto.substring(0,8));
console.log(producto.substring(2,1));

const usuario = "Brayancito";
console.log(usuario.substring(0,1))
console.log(usuario.charAt(0,1)) //recuperamos la primera letra

