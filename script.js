//==============================================================
//Helper Functions
//==============================================================

const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

const generateRandomColor = () => {
    //pick r, g, b values between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const generateRandomColors = (num) => {
    //make an array
    let output = [];
    //add num colors to the array
    for(let i=0;i < num; i++) {
        output.push(generateRandomColor())
    }
    return output;
}
  
const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(let i=0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor = "steelblue";
    message.textContent = "";
}

//==============================================================
//Init Variables
//==============================================================
//State
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

//Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

//==============================================================
//Main
//==============================================================
function main() {
    colorDisplay.textContent = pickedColor;
    resetButton.addEventListener("click", reset);

    modeButtons.forEach((button) => {
        button.addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset()
        });
    });

    //Setup Squares
    for (let i=0; i< squares.length;i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;
        if (clickedColor===pickedColor) {
            message.textContent = "That is correct!";
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "black";
            message.textContent = "Try Again"
        }
         })
    };
}

main();





