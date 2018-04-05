// Make button
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "pink"];
var addSquareButton = document.createElement("button");
var buttonText = document.createTextNode("Add Square");
var numberOfSquares = 0;
addSquareButton.appendChild(buttonText);
addSquareButton.style.float = "left"; // This ensures that the button stays to the left of the blocks (and doesn't move)
document.body.appendChild(addSquareButton);

addSquareButton.addEventListener("click", addDiv);

function addDiv() {
    numberOfSquares++;
    var div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.float = "left";
    div.className = "blackSquare";
    div.innerText = "";
    div.id = numberOfSquares;
    div.addEventListener("mouseover", showID);
    div.addEventListener("mouseout", hideID);
    div.addEventListener("click", changeColor);
    div.addEventListener("dblclick", removeSquare)
    document.body.appendChild(div);
}

function showID() {
    var div = document.getElementById(this.id);
    div.innerText = this.id;
}

function hideID() {
    var div = document.getElementById(this.id);
    div.innerText = "";
}

function changeColor() {
    var num = Math.floor(Math.random() * colors.length);
    var div = document.getElementById(this.id);
    div.style.backgroundColor = colors[num];
}

function removeSquare() {
    var array = document.getElementsByClassName("blackSquare");
    var next = parseInt(this.id) + 1;
    var prev = parseInt(this.id) - 1;
    if (isEven(this.id)) {
        if (next > array.length) { // If there is no square after the one being clicked
            alert("There is no square to remove!");
        }
        else {
            var elementToRemove = document.getElementById(next);
            document.body.removeChild(elementToRemove);
        }
    }
    else {
        if (prev < 1) { // If there is no square before the one being clicked
            alert("There is no square to remove!");
        }
        else {
            var elementToRemove = document.getElementById(prev);
            document.body.removeChild(elementToRemove);
        }
    }
}

function isEven(num) {
    return num % 2 == 0;
}