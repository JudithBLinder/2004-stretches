// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {

  constructor(sidesPerDie, numDice){
    if (typeof(sidesPerDie) != 'number' || 
        typeof(numDice) != 'number' ||
        sidesPerDie <= 0 ||
        numDice <= 0) {
      throw 'wrong input!'
    }
    this.sidesPerDie = sidesPerDie;
    this.numDice = numDice;
    this.history = [];
  }
  
  roll(){
    let returnedArray = [];
    for (let i=0; i<this.numDice; i++){
      const max = this.sidesPerDie;
      const min = 1;
      // To get random number between two values
      let randOut = Math.floor(Math.random() * (max - min) + min);
      returnedArray.push(randOut);
    };
    this.history.push(returnedArray);
    return returnedArray;
  }
}

module.exports = { DiceRoller };