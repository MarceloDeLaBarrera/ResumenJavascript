const inputColor = document.getElementById("inputColor");
const button = document.getElementById("btn-ver");
const parrafoHexa = document.getElementById("parrafoHexa");
const card = document.querySelector(".card_color");

console.log(inputColor);
console.log(button);
console.log(parrafoHexa);
console.log(card);

button.addEventListener("click", () => {
  parrafoHexa.textContent = inputColor.value;
  card.style.background = inputColor.value;
});
