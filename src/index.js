class Validator {
  constructor() {
    this.req = false;
    this.minLen = 0;
    this.containWords = [];
  }

  string() {
    return this;
  }

  isValid(str) {
    if (!this.req) return true;

    if (typeof str !== 'string' || str.length < this.minLen || !str.length) return false;

    if (this.containWords.length > 0) {
      let result = true;
      this.containWords.forEach((word) => {
        if (!str.includes(word)) {
          result = false;
        }
      });
      return result;
    }

    return true;
  }

  required() {
    this.req = true;
  }

  contains(str) {
    this.containWords.push(str);
    return this;
  }

  minLength(num) {
    this.minLen = num;
    return this;
  }
}

export default Validator;
