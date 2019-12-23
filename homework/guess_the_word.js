(function () {

    const words = ['javascript', 'java', 'php', 'elm'];
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    let errorCounter = 0;
    let hiddenWord = Array.from(word, () => 'X');

    while (word !== hiddenWord.join('')) {
        
        const letter = prompt('You have to guess the word ' + hiddenWord.join('') +
            ' with ' + word.length + ' letters.\n' +
            'Please write a Letter:');

        if (word.includes(letter) && !(hiddenWord.includes(letter)) ) { // check if letter is included in word and not included allready in hiddenword
            hiddenWord = Array.from(word, (v, i) => v === letter ? letter : hiddenWord[i]);
            errorCounter = 0;
        } else errorCounter += 1;

        if (errorCounter >= 3) {
            alert('You had more tban ' + errorCounter + ' trials.\n' +
                'GAME OVER!')
            break;
        }

        if (word == hiddenWord.join('')) {
            alert('Congratulations! You guessed the word')
            break;
        }

        console.log(word + ', ' + hiddenWord.join(''))
        console.log('Error Counter: ' + errorCounter)
    }
  }());
