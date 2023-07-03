function cleanSet(set, startString) {
  const stringArr = [];

  if (startString === '') {
    return '';
  }

  for (const word of set) {
    if (word.startsWith(startString)) {
      stringArr.push(word.split(startString)[1]);
    }
  }
  return stringArr.join('-');
}

export default cleanSet;
