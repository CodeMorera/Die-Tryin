var player1 = Math.floor(1 + (Math.random()*6));
var player2 = Math.floor(1 + (Math.random()*6));

document.querySelectorAll("img")[0].setAttribute("src", "images/die-" + player1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/die-" + player2 + ".png");

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player1 == player2) {
  document.querySelector("h1").innerHTML = "Draw! Shake Hands!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
