class ETL {
  transform (pointsToLetterMap) {
    const letterToPointsMap = {};
    Object.keys(pointsToLetterMap).forEach((point) => {
      const letters = pointsToLetterMap[point]
      letters.forEach((letter) => {
        letterToPointsMap[letter.toLowerCase()] = parseInt(point)
      })
    });
    return letterToPointsMap;
  }
}

module.exports = ETL;
