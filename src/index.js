class Validator {
  constructor() {
    this.req = false;
    this.minLength = 0;
  }

  string() {
    return this;
  }

  isValid(str) {
    if (!this.req) return true;
    if (typeof str !== 'string' || str < this.minLength || !str) return false;

    return true;
  }

  required() {
    this.req = true;
  }

  contains() {
    return this;
  }

  minLength(num) {
    this.minLength = num;
  }
}

export default Validator;
