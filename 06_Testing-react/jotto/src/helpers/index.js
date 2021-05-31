/*
 * @method
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letter matched between word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  console.log(typeof guessedLetterSet, guessedLetterSet)
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}
