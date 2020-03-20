/*
 * Coded by: Garz4 (Uriel García Rivas).
 */
const canvasBoard = document.getElementById("board");
const rect = canvasBoard.getBoundingClientRect();
const contextBoard = canvasBoard.getContext("2d");
const backgroundBoard = document.getElementById("tdBoard");
var turno = 0;

function drawBoardForWhite(){
  backgroundBoard.setAttribute("style", "background-image: url('img/Board_white.png');");
}
function drawBoardForBlack(){
  backgroundBoard.setAttribute("style", "background-image: url('img/Board_black.png');");
}

function setUp(){
 drawBoardForWhite();
}

class Piece {
  constructor(x, y, id){
    this.id = id;
    this.movesAllowed = [];
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.onload = function() {
        contextBoard.drawImage(this.img, this.x, this.y, this.x+95, this.y+95);
    }
    this.img.src = "pieces/Chess_qlt45.svg";
  }

  printMovesAllowed(){

  }
}
