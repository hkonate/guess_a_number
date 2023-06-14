function askNumber() {
  return prompt("Donnez-moi un nombre entier");
}
function didIWin(givenNumber, numbertoFind) {
  if (isNaN(parseInt(givenNumber))) {
    alert(
      "Erreur de format, accepte seulement les nombres entiers exemple de format accepté (1, 10, 25, 68)"
    );
    console.log(Number.isInteger(parseInt(givenNumber)));
    return false;
  } else if (parseInt(givenNumber) > numbertoFind) {
    alert("Plus grand");
    return false;
  } else if (parseInt(givenNumber) < numbertoFind) {
    alert("Plus petit");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}
let numbertoFind = -1;

function askNumberToFind() {
  numbertoFind = prompt("Donnez-moi un nombre à deviner, s'il vous plait");
  if (parseInt(numbertoFind) < 0 || parseInt(numbertoFind) > 50)
    askNumberToFind();
}

function gameplay() {
  const givenNumber = askNumber();
  const result = didIWin(givenNumber, numbertoFind);
  if (!result) gameplay();
}
askNumberToFind();
gameplay();
