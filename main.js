// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [ , p1, ] = empleados

console.log(p1)

// Extrae el email del empleado Luis --> Luis@gmail.com

const [p2, , ] = empleados

const {email} = p2

console.log(email)

//Dado el siguiente objeto:

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}


// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon

const {name: nombre1} = pokemon

console.log(nombre1)

// Extra el tipo de Pokemon que es

const {type} = pokemon
console.log(type)

// Extra el movimiento “Tackle”

const {moves} = pokemon

const [ , atack, , ] = moves
console.log(atack)



// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name2: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const poke2 = {...pokemon,...pikachu}

console.log(poke2)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther =(...suma) => {
     
    console.log(suma.reduce((a,b)=> a + b));
    
    }  

sumEveryOther(6, 8, 2, 3, 1); //20
  sumEveryOther(11, 3, 12); //26 



//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo 
//de los números.

const addOnlyNums = (...suma2) => {

    const result = suma2.filter(element => typeof element === 'number');

    console.log(result.reduce((a,b)=> a + b))

}

addOnlyNums(1, 'perro', 2, 4); //7

// // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha 
// // recibido.

const countTheArgs = (...numArg) => {

    console.log(numArg.length)

}

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos 
//(usando spread operator).


const combineTwoArrays = (array1,array2) => {

    const concatenarArray = [...array1, ...array2]

console.log(concatenarArray)

}

combineTwoArrays(["maria", "pedro", "lucia"],[25, 30, 35])

// 3. Extras
 
//Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

const {today: maximaHoy} = HIGH_TEMPERATURES

const {tomorrow: maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy,maximaManana)

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...maxArrays) => {

    const unique = maxArrays.filter(function(item, pos){
        return maxArrays.indexOf(item) == pos; 
      });

    console.log(unique)
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 

onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los 
//combine todos en un solo array.

const combineAllArrays = (...allArrays) => {

    const mergeallArrays = allArrays.flat(); 
    
    console.log(mergeallArrays);
}

combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])

combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva 
// la suma de todos los valores cuadrados.

// const sumAndSquare = () => {

//     console.log()

// }