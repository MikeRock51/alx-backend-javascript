function updateUniqueItems(items) {
  items.forEach((item, key) => {
    if (item === 1) {
      items.set(key, 100);
    }
  });
  return items;
}

export default updateUniqueItems;
