//  questo comando indica il pulsante con id "generate-grid"
let button = document.getElementById("generate-grid");

//  aggiungere una funzione al pulsante, in questo caso click
button.addEventListener("click", function () {
  //  la constante cellsContainer viene riportata nel documento con l'id "cells-container"
  const cellsContainer = document.getElementById("cells-container");

  //  la constante totalCell genera una griglia 10x10
  const totalCell = 10 * 10;

  // nella costante bomb c'è un array
  const bomb = [];
  // loop-controllo che la lunghezza di bomb sia inferiore a 16
  while (bomb.length < 16) {
    const random = getRandomNumber();

    // controllo per evitare d'inserire due volte lo stesso numero

    if (!bomb.includes(random)) {
      bomb.push(random);
    }
  }

  //- creo una lista di numeri da 1 a 100
  for (let i = 1; i <= totalCell; i++) {
    // comando per aggiungere l'elemento "li" in html
    const cell = document.createElement("li");

    // scrive nella constante cell il numero da 1 a 100
    cell.innerText = i;

    // aggiungere una classe, in questo caso "cell"
    cell.classList.add("cell");

    // aggiungere una classe, in questo caso "cell"
    cellsContainer.append(cell);

    //  aggiungere una funzione al pulsante, in questo caso al click deve mettere in funzione la classe "yellow"
    cell.addEventListener("click", function () {
      cell.classList.add("yellow");

      //- creo una lista di numeri da 1 a 100
      if (bomb.includes(i)) {
        cell.classList.add("red");
      }
    });
  }
});

// generiamo un numero casuale da 1 a 100 con la funzione
function getRandomNumber() {
  const RandomNumber = Math.floor(Math.random() * 100) + 1;
  return RandomNumber;
}
