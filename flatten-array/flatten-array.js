class Flattener {
  flatten (arrayOfArrays) {
    let self = this;
    return arrayOfArrays.reduce((overall, currentArray) => {
      const flattenedCurrentArray = Array.isArray(currentArray) ? self.flatten(currentArray) : currentArray;
      return flattenedCurrentArray !== null ? overall.concat(flattenedCurrentArray) : overall;
    }, [])
  }
}

module.exports = Flattener;
