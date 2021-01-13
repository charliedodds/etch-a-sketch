const colorHues = getHues();

const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let numColsAndRows = 16;

function draw(e) {
  e.target.style.backgroundColor = genColor();
}

function createGrid(numColsAndRows) {
  for (let i = 0; i < numColsAndRows * numColsAndRows; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", draw);
    div.style.width = `calc(100% / ${numColsAndRows})`;
    div.style.height = `calc(100% / ${numColsAndRows})`;
    container.appendChild(div);
  }
}

function reset() {
  container.innerHTML = "";
  let newNum = parseInt(
    prompt(
      `What size grid would you like next? (MAX: 100)
    Put your mouse where you'd like to start, enter the number. then press ENTER without moving the mouse.
    `
    )
  );
  if (newNum === NaN || newNum < 1) {
    newNum = parseInt(prompt("Try entering a positive number!"));
  }
  numColsAndRows = newNum < 100 ? newNum : 100;
  createGrid(numColsAndRows);
}

clearButton.addEventListener("click", reset);

createGrid(numColsAndRows);

function pickColor(colorArr) {
  return colorArr[Math.floor(Math.random() * colorArr.length)];
}

function getHues() {
  let hueArray = [];
  for (let i = 0; i <= 360; i += 10) {
    hueArray.push(i);
  }
  return hueArray;
}

function getH() {
  return pickColor(colorHues);
}

function genColor() {
  let h = getH();
  return `hsl(${h}, 100%, 50%)`;
}
