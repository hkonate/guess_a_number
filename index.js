function askNumber() {
  return prompt("Hi, can you give me a number please");
}
function didIWin(givenNumber) {
  if (parseInt(givenNumber) === 22) {
    alert("Bravo ! Vous avez deviné le nombre");
  } else if (parseInt(givenNumber) > 22) {
    alert("Plus grand");
  } else if (parseInt(givenNumber) < 22) {
    alert("Plus petit");
  } else {
    alert("Erreur de format (1, 10, 25, 68)");
  }
}

function gameplay() {
  let givenNumber;
  do {
    givenNumber = askNumber();
    didIWin(givenNumber);
  } while (givenNumber !== 22 || isNaN(parseInt(givenNumber)));
}

gameplay();
