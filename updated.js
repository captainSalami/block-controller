//update all with es6
//add GoHome() function
//alert text that block is returning home
//show block speed in direction

var myGamePiece;
//UI vars
const gameBox = document.getElementById('box');
const controller = document.getElementById('game-controls');
const colors = document.querySelectorAll('button.color');
const editBox = document.getElementById('edit-box');
editBox.addEventListener('click', changeColor);

function startGame() {
  //const askColor = prompt("What color would you like?");
  myGamePiece = new Component(30, 30, "grey", 250, 120);
  myGameArea.start();
}


const myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 525;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        gameBox.insertBefore(this.canvas, controller);
        this.interval = setInterval(updateGameArea, 50);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        const ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
        showStatus(this.speedX, this.speedY, myGamePiece);
    }
  }
}

Component.prototype.changeColor = function(newColor){
    this.color = newColor;
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}

//choose new color and update
function changeColor(e){
    colors.forEach(function(color){
        const targetValue = e.target.parentElement.value;
        if(e.target.value === color.value || targetValue === color.value){
            //myGamePiece.color = color.value;

            const chosenColor = color.value;
            myGamePiece.changeColor(chosenColor);
            console.log(chosenColor);

            //console.log(myGamePiece.color);
            myGamePiece = new Component(30, 30, color.value, 225, 120);
        }
    });
}