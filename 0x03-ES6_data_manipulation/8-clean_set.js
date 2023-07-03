function cleanSet(set, startString) {
  const stringArr = [];

  for (const word of set) {
    if (startString !== '' && word.startsWith(startString)) {
      stringArr.push(word.split(startString)[1]);
    }
  }
  return stringArr.join('-');
}

export default cleanSet;
