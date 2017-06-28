const accumalate = (collection, reducer) => {
  return collection.map((value) => reducer(value));
}

module.exports = accumalate;
