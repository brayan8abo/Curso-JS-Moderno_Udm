const producto = '                  Monitor 32 pulgadas   ';

console.log(producto);
console.log(producto.length);


//eliminar espacios en blanco

console.log(producto.trimStart()); //espacios en blanco  inicio
console.log(producto.trimEnd()); // al final

console.log(producto.trimStart().trimEnd()); //principio y final.


console.log(producto.trim()); //ambos lados.