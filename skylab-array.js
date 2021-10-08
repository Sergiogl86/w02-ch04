// Se crea el Array

class SkylabArray {
  length = 0;

  constructor() {
    this.length = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
      this, this.push(arguments[i]);
    }
  }

  push(value) {
    this[this.length] = value;
    this.length = this.length + 1;
    return this.length;
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

  filter(value) {
    const auxArray = new SkylabArray();
    const filterFunction = value;
    debugger;
    for (let i = 0; i < this.length; i++) {
      if (filterFunction(this[i])) {
        auxArray.push(this[i]);
      }
    }
    if (auxArray.length === 0) {
      return undefined;
    } else {
      return auxArray;
    }
  }

  map(value) {
    const auxArray = new SkylabArray();
    const mapFunction = value;
    for (let i = 0; i < this.length; i++) {
      auxArray.push(mapFunction(this[i]));
    }
    return auxArray;
  }
}

const prueba = new SkylabArray(1, 2, 4, 5);

console.log(prueba);

//console.log(prueba[1]);

//console.log(prueba);

/*const even = prueba.map(function (x) {
  return Math.sqrt(x);
});

console.log(even);
*/
//prueba.push(5);

//const algo = new Array();

//console.log(algo.some( > 1));

//console.log(prueba);

/* const prueba = ['a', 'b', 'c'],

function length(array) {
  
return arrayLength
} */

module.exports = { SkylabArray };
