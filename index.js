function askNumber() {
  return prompt("Donner-moi un nombre entier");
}
function didIWin(givenNumber) {
  if (isNaN(parseInt(givenNumber)) || Number.isInteger(parseInt(givenNumber))) {
    alert(
      "Erreur de format, accepte seulement les nombres entiers exemple de format accepté (1, 10, 25, 68)"
    );
    return false;
  } else if (parseInt(givenNumber) > 22) {
    alert("Plus grand");
    return false;
  } else if (parseInt(givenNumber) < 22) {
    alert("Plus petit");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}

function gameplay() {
  let givenNumber;
  do {
    givenNumber = askNumber();
  } while (!didIWin(givenNumber));
}

gameplay();
