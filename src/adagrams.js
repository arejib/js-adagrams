export const drawLetters = () => {
  const LETTERPOOL = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
};

let pool = {...LETTERPOOL};
let hand = [];

for (let i = 0; i < 10; i++) {
  const letters = Object.keys(pool);
  const randIndex = Math.floor(Math.random() * letters.length);
  const letter = letters[randIndex];

  if (pool[letter] > 0) {
    hand.push(letter);
    pool[letter] -= 1;
  } else {
    delete pool[letter];
    i--;
  }

}
return hand;

};


export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const letterCount = [];

  for (const letter of word) {
    letterCount.push(letter);

    if (!lettersInHand.includes(letter)) {
      return false;
      
      } else if (letterCount.filter(y => y === letter).length > (lettersInHand.filter(x => x === letter).length)) {
        return false;
      }
}
return true;
};

    //   return false;







export const scoreWord = (word) => {
  const lettersAndScores = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
};

word = word.toUpperCase();
let score = 0;

for (const letter of word) {
    score += lettersAndScores[letter]
  }

if (word.length >= 7) {
  score += 8;
  }

  return score
};

export const highestScoreFrom = (words) => {
  let winningScore = 0;
  let winningWord = '';

  for (const word of words) {
    const score = scoreWord(word);
    if (score > winningScore) {
      winningScore = score;
      winningWord = word;
    } else if (winningScore === score) {
      let prevWordLen = winningWord.length;
      let currentWordLen = word.length;
        if (currentWordLen === 10 && prevWordLen < 10) {
          winningWord = word;
        } else if (prevWordLen != 10 && currentWordLen < prevWordLen) {
          winningWord = word;
        }
    } 
  } 
  const resultDict = {"score": winningScore, "word": winningWord};
  return resultDict;

};
