function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8ArrayView = new Int8Array(buffer);

  if (position > int8ArrayView.length - 1) {
    throw new Error('Position outside range');
  }

  int8ArrayView[position] = value;
  return new DataView(buffer);
}

export default createInt8TypedArray;
