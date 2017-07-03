class Raindrops {
  convert (num) {
    let raindrop = '';
    if (num % 3 === 0) {
      raindrop = raindrop.concat('Pling');
    }
    if (num % 5 === 0) {
      raindrop = raindrop.concat('Plang');
    }
    if (num % 7 === 0) {
      raindrop = raindrop.concat('Plong');
    }

    if (raindrop.length === 0) {
      raindrop = num.toString()
    }

    return raindrop;
  }
}

module.exports = Raindrops;
