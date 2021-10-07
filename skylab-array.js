// Se crea el Array

class SkylabArray {
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

  find(value) {
    const findFunction = value;
    for (let i = 0; i < this.length; i++) {
      if (findFunction(this[i])) {
        return this[i];
      }
    }
    return undefined;
  }
}

const prueba = new SkylabArray();

prueba.push("casa");

prueba.push("toro");

prueba.push("salsa");

prueba.push("nada");

console.log(prueba[1]);

console.log(prueba);

const even = (element) => element === "error";

console.log(prueba.find(even));

//prueba.push(5);

//const algo = new Array();

//console.log(algo.some( > 1));

//console.log(prueba);

/* const prueba = ['a', 'b', 'c'],

function length(array) {
  
return arrayLength
} */
