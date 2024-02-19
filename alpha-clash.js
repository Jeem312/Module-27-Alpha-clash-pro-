// button-function

function continueGame(){
    hideId('game-intro');
    showId('play-ground');
 alphabetChange();
}
// Keyboard function

function alphabetChange(){
    const typingChanges = typingChange();
     const displayText = document.getElementById('Y');
     displayText.innerText = typingChanges;
    getBgColor(typingChanges); 
 }
function gameOver(){
    hideId('play-ground');
    showId('score-bord');
    // updateFinalScore
    const finalScore = document.getElementById('score');
    const lastScore = finalScore.innerText;
    getTextElementValueById('last-score', lastScore)
    // clear the last high lighted alphabet
    const Y = document.getElementById('Y');
    const currentAlphabet = Y.innerText;
    removeBgColor(currentAlphabet)
}
function playAgain(){
    hideId('score-bord');
    showId('play-ground');
// reset score and life
getTextElementValueById('life',5)
getTextElementValueById('score',0)

    continueGame()}