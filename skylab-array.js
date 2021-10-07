// Se crea el Array

class skylabArray {
  length = 0;
  push(value) {
    this[this.length] = value;
    this.length = this.length + 1;
  }
}

const prueba = new skylabArray();

console.log(prueba.length);

prueba.push(5);

console.log(prueba);

/* const prueba = ['a', 'b', 'c'],

function length(array) {
  
return arrayLength
} */
