class Bowling {
  constructor (rolls) {
    this.rolls = rolls;
  }

  score () {
    const initGame = {
      frame: 1,
      roll: 1,
      pins: 10,
      score: 0,
      lastFrameSpare: false,
      lastFrameStrike: false,
      consecutiveStrikes: false,
      fill: false
    };

    const finalGame = this.rolls.reduce((game, currentRoll, index) => {
      if (currentRoll < 0 || currentRoll > 10) {
        throw new Error('Pins must have a value from 0 to 10');
      }

      if (currentRoll > game.pins) {
        throw new Error('Pin count exceeds pins on the lane')
      }

      if (game.frame > 10) {
        throw new Error('Should not be able to roll after game is over');
      }

      const lastFrame = game.frame === 10;
      const isStrike = game.roll === 1 && currentRoll === 10;
      const isSpare = game.roll === 2 && currentRoll === game.pins;
      const finalFrameEndRule = (!game.fill && !isSpare && game.roll === 2) || game.roll === 3;
      const otherFramesEndRule = isStrike || isSpare || game.roll === 2;
      const frameDone = lastFrame ? finalFrameEndRule : otherFramesEndRule
      const nextPinsIfLastGame = (isStrike || isSpare) ? 10 : game.pins - currentRoll;
      const nextPinsOther = frameDone ? 10 : game.pins - currentRoll;
      const nextPins = lastFrame ? nextPinsIfLastGame : nextPinsOther;

      let currentScore = game.score + currentRoll;

      if (game.lastFrameStrike && game.roll < 3) { currentScore += currentRoll; }
      if (game.lastFrameSpare && game.roll === 1) { currentScore += currentRoll; }
      if (game.consecutiveStrikes && game.roll === 1) { currentScore += currentRoll; }

      return {
        frame: frameDone ? game.frame + 1 : game.frame,
        roll: frameDone ? 1 : game.roll + 1,
        pins: nextPins,
        score: currentScore,
        lastFrameSpare: frameDone ? isSpare : game.lastFrameSpare,
        lastFrameStrike: frameDone ? isStrike : game.lastFrameStrike,
        consecutiveStrikes: frameDone ? isStrike && game.lastFrameStrike : game.consecutiveStrikes,
        fill: game.fill || (lastFrame && (isStrike || isSpare))
      };
    }, initGame);

    if (finalGame.frame !== 11) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    return finalGame.score;
  }
}

module.exports = Bowling;
