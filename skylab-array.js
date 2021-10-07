// Se crea el Array

class skylabArray {
  length = 0;
  push(value) {
    this[this.length] = value;
    this.length = this.length + 1;
  }
  some(value) {
    if (this.length === 0) {
      return false;
    } else {
      const someFunction = value;
      for (let i = 0; i < this.length; i++) {
        if (someFunction(this[i])) {
          return true;
        }
      }
      return false;
    }
  }
}

const prueba = new skylabArray();

prueba.push(5);

prueba.push(9);

prueba.push(5);

prueba.push(8);

console.log(prueba[1]);

console.log(prueba);

const even = (element) => element % 2 === 0;

console.log(prueba.some(even));

//prueba.push(5);

//const algo = new Array();

//console.log(algo.some( > 1));

//console.log(prueba);

/* const prueba = ['a', 'b', 'c'],

function length(array) {
  
return arrayLength
} */
