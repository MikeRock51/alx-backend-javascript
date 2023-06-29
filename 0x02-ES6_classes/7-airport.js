/* eslint-disable no-underscore-dangle */
class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}

export default Airport;
