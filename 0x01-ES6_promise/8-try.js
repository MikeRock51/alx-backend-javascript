function divideFunction(numerator, denumerator) {
  if (denumerator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denumerator;
}

export default divideFunction;
