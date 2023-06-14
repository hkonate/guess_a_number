function askNumber() {
  return prompt("Donnez-moi un nombre entier");
}
// function didIWin(givenNumber, numbertoFind) {
//   if (isNaN(parseInt(givenNumber))) {
//     alert(
//       "Erreur de format, accepte seulement les nombres entiers exemple de format accepté (1, 10, 25, 68)"
//     );
//     console.log(Number.isInteger(parseInt(givenNumber)));
//     return false;
//   } else if (parseInt(givenNumber) > numbertoFind) {
//     alert("Plus grand");
//     return false;
//   } else if (parseInt(givenNumber) < numbertoFind) {
//     alert("Plus petit");
//     return false;
//   } else {
//     alert("Bravo ! Vous avez deviné le nombre");
//     return true;
//   }
// }
function didIWin(givenNumber, numbertoFind) {
  if (isNaN(parseInt(givenNumber))) {
    alert(
      "Erreur de format, accepte seulement les nombres entiers exemple de format accepté (1, 10, 25, 68)"
    );
    return false;
  } else if (parseInt(givenNumber) < numbertoFind) {
    alert("Plus grand");
    return false;
  } else if (parseInt(givenNumber) > numbertoFind) {
    alert("Plus petit");
    return false;
  } else {
    document.querySelector("#box").innerText =
      "Bravo ! Vous avez deviné le nombre";
    return true;
  }
}
let numbertoFind = -1;
let count = 0;
function askNumberToFind() {
  numbertoFind = prompt(
    "Donnez-moi un nombre à deviner entre 0 et 50, s'il vous plait"
  );
  if (
    parseInt(numbertoFind) < 0 ||
    parseInt(numbertoFind) > 50 ||
    !numbertoFind
  )
    askNumberToFind();
}

// function gameplay() {
//   // const givenNumber = askNumber();
//   // if (!result) gameplay();
//   console.log(numbertoFind);
// }
// gameplay();
const button = document.querySelector("button");
button.addEventListener("click", () => {
  didIWin(document.querySelector("input").value, numbertoFind);
  count++;
  document.querySelector(
    "#try"
  ).innerText = `Votre nombre de tentatives est de ${count}`;
});
askNumberToFind();
