function updateUniqueItems(items) {
  if (items instanceof Map !== true) {
    throw new Error('Cannot process');
  }

  items.forEach((item, key) => {
    if (item === 1) {
      items.set(key, 100);
    }
  });
  return items;
}

export default updateUniqueItems;
