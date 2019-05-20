var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombutton = document.querySelector("#random");
var right = document.querySelector("#right");
var left = document.querySelector("#left");
var top1 = document.querySelector("#top");
var bottom = document.querySelector("#bottom");

changeBG();

function changeBG() {
	var direction = checkDirection();
	body.style.background = 
	"linear-gradient(to "
	+ direction
	+ ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") fixed";

	css.textContent = "background: " + body.style.background + ";";
}

function checkDirection() {
	if (right.checked === true) {return "right";}
	else if (left.checked === true) {return "left";}
	else if (top1.checked === true) {return "top";}
	else {return "bottom";}
}

function randomDirection() {
	var directions = ["right", "top", "bottom", "left"];
	var randD = directions[Math.floor(Math.random()*directions.length)];
	if (randD === "right") {right.checked === true}
	else if (randD === "left") {left.checked === true}
	else if (randD === "top") {top1.checked === true}
	else {bottom.checked === true}
	return randD;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomGradient() {
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();
	var direction = randomDirection();

	body.style.background = 
	"linear-gradient(to "
	+ direction 
	+ ", "
	+ randomColor1
	+ ", " 
	+ randomColor2
	+ ") fixed";

	css.textContent = body.style.background + ";";
	color1.value = randomColor1;
	color2.value = randomColor2;
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "+ 
	color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randombutton.addEventListener("click", randomGradient);
right.addEventListener("click", changeBG);
left.addEventListener("click", changeBG);
top1.addEventListener("click", changeBG);
bottom.addEventListener("click", changeBG);

