//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  constructor(...names) {
    this.players = names;
    this.points = Array(names.length);
    for (let i = 0; i < this.points.length; i++) {
      this.points[i] = 0;
    }
  }

  // eslint-disable-next-line complexity
  play(...moves) {
    const game = (move1, move2) => {
      if (move1 === move2) {
        return 0;
      } else if (
        (move1 === 'Rock' && move2 === 'Scissors') ||
        (move1 === 'Paper' && move2 === 'Rock') ||
        (move1 === 'Scissors' && move2 === 'Paper')
      ) {
        return 1;
      } else {
        return 2;
      }
    };

    for (let i = 0; i < moves.length - 1; i++) {
      let result = game(moves[i], moves[i + 1]);
      if (result === 0) {
        continue;
      } else if (result === 1) {
        this.points[i] += 1;
        if (moves.length === 2) {
          return `${moves[i]} defeats ${moves[i + 1]}, ${
            this.players[i]
          } wins this round.`;
        }
        moves[i + 1] = moves[i];
      } else {
        this.points[i + 1] += 1;
        if (moves.length === 2) {
          return `${moves[i + 1]} defeats ${moves[i]}, ${
            this.players[i + 1]
          } wins this round.`;
        } else {
          this.points[i] -= 1;
        }
      }
    }
  }

  winner() {
    let currentWinner = ['', 0];
    for (let i = 1; i < this.players.length; i++) {
      if (this.points[i - 1] < this.points[i]) {
        currentWinner = [this.players[i], this.points[i]];
      } else {
        currentWinner = [this.players[i - 1], this.points[i - 1]];
      }
    }
    return `The victor is ${currentWinner[0]} with ${currentWinner[1]} points.`;
  }
}

module.exports = { RPS };
