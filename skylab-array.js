// Se crea el Array

class SkylabArray {
  length = 0;

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

module.exports = {
  SkylabArray,
};
