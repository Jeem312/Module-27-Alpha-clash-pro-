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
}
function playAgain(){
    hideId('score-bord');
    showId('play-ground');
// reset score and life
getTextElementValueById('life',5)
getTextElementValueById('score',0)

    continueGame()}