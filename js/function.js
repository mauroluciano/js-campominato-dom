let button = document.getElementById("generate-grid");
button.addEventListener("click", function () {
  const cellsContainer = document.getElementById("cells-container");
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
    const cell = document.createElement("li");
    cell.innerText = i;
    cell.classList.add("cell");
    cellsContainer.append(cell);

    //- creo una lista di numeri da 1 a 100
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
