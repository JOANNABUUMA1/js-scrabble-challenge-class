/* eslint-disable prettier/prettier */
class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word
  }

  getLetterValue(letter) {
    let letterValue

    if (
      letter === 'A' ||
      letter === 'E' ||
      letter === 'I' ||
      letter === 'O' ||
      letter === 'U' ||
      letter === 'L' ||
      letter === 'N' ||
      letter === 'R' ||
      letter === 'S' ||
      letter === 'T'
    ) {
      letterValue = 1
    } else if (letter === 'D' || letter === 'G') {
      letterValue = 2
    } else if (
      letter === 'B' ||
      letter === 'C' ||
      letter === 'M' ||
      letter === 'P'
    ) {
      letterValue = 3
    } else if (
      letter === 'F' ||
      letter === 'H' ||
      letter === 'V' ||
      letter === 'W' ||
      letter === 'Y'
    ) {
      letterValue = 4
    } else if (letter === 'K') {
      letterValue = 5
    } else if (letter === 'J' || letter === 'X') {
      letterValue = 8
    } else if (letter === 'Q' || letter === 'Z') {
      letterValue = 10
    } else {
      letterValue = 0
    }

    return letterValue
  }

  score() {
    if (this.word == null)
      return 0;

    let score = 0
    this.word = this.word.toUpperCase()

    for (let i = 0; i < this.word.length; i++) {
      score = score + this.getLetterValue(this.word[i])
    }
    return score;
  }





}



module.exports = Scrabble
