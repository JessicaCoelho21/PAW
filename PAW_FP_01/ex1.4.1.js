//Figura 4
//for each com objeto
const myObject = {a: 1, b: 2, c: 3};

for(const property in myObject){
    console.log(property);
}

//for each com array
const myArray = [1, 2, 3];

for(const property in myArray){
    console.log(property);
}

//Figura 5
//for each com objetos
const object = {a:1, b: 2, c: 3};

for(const property in object){
    console.log("Propriedade: " + property + "Objeto: " + object[property]);
}

//for each com array
const array = [1, 2, 3];

for(const property in array){
    console.log("" + property + " " + array[property + ""]);
}

