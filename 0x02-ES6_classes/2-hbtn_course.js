class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw TypeError('Student name must be a string');
      }
    }
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    for (const student of students) {
      if (typeof student !== 'string') {
        throw TypeError('Student name must be a string');
      }
    }
    this._students = students;
  }
}

export default HolbertonCourse;
