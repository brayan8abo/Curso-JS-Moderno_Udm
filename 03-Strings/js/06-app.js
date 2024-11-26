const producto = 'Monitor 32 pulgadas';

//.repeat

// const texto = " en Promocion".repeat(3);
const texto = " en Promocion".repeat(2.4);

console.log(texto);
console.log(`El producto ${producto} esta ${texto}!!!`);

console.log(`${producto} ${texto}!!!`);

//Split dividir string

const actividad = "Estoy aprendiendo JS moderno";

console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar, musica, escribir,aprender a programar';
console.log(hobbies.split(", ")); //separa

const tweet = "Aprendiendo Js #ChupaVergasModerno";
console.log(tweet.split('#'))

