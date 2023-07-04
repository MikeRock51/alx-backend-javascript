function cleanSet(set, startString) {
  const stringArr = [];

  if (!startString || startString.length < 1) {
    return '';
  }

  for (const word of set) {
    if (word && word.startsWith(startString)) {
      stringArr.push(word.split(startString)[1]);
    }
  }
  return stringArr.join('-');
}

export default cleanSet;
