// display-function


function hideId(elementId){
    const addDisplay = document.getElementById(elementId);
   const displayAdded = addDisplay.classList.add('hidden');
return displayAdded;
}
function showId(elementId){
    const removeDisplay = document.getElementById(elementId);
    const displayRemoved = removeDisplay.classList.remove('hidden');
return displayRemoved;
}




// keyboard-functions
function getBgColor(elementId){
    const bg = document.getElementById(elementId);
    bg.classList.add('bg-orange-400');
}
function removeBgColor(elementId){
    const bg = document.getElementById(elementId);
    bg.classList.remove('bg-orange-400');
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const  value = parseInt(elementValueText);
    return value

}

 function getTextElementValueById(elementId,value){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
 }  
function typingChange(){
    const alphabets = 'asdfghjklqwertuyiopzxcvbnm'
   const alphabet = alphabets.split('');
   const randomAlphabet = Math.random() * 25;
   const index = Math.round(randomAlphabet);
   const array = alphabet[index];
   return array;
}
function stop (){
    gameOver()
}
function handleKeyupEvent(event){
    const keyCatcher = event.key;
   
   
 
    // key player is expected to press
     const displayText = document.getElementById('Y');
  const text =  displayText.innerText ;
  const finalText = text.toLowerCase();
  if(keyCatcher === finalText){
   const currentScore = getTextElementById('score');
    const newScore = currentScore + 1 ;
   getTextElementValueById('score', newScore);
   removeBgColor(finalText);
    continueGame();
  }
  else{
    const  life = getTextElementById('life');
    const newLife = life - 1;
getTextElementValueById('life',newLife); 
if(newLife === 0){
    gameOver()
 
} }
}
document.addEventListener('keyup', handleKeyupEvent);