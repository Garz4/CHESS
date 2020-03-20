/*
 * Coded by: Garz4 (Uriel García Rivas).
 * ID:
 * 
 *
 *
 *
 *
 *
 *
 */
const canvasBoard = document.getElementById("board");
const rect = canvasBoard.getBoundingClientRect();
const contextBoard = canvasBoard.getContext("2d");
var turno = 0;

function drawBoard(num, letter, k){
 /* Draws the board for white or black, deppends of num, letter and k. */
 for(let i = 0; i < 8; i++){
   for(let j = 0; j < 8; j++){
     if(k % 2 != 0) contextBoard.fillStyle = "#67ab23"; /* green squares */
     else contextBoard.fillStyle = "#f0f0da"; /* white squares */
     contextBoard.fillRect(100*j, 100*i, 100, 100);
     k++;
   }
   k++;
 }
 contextBoard.font = "25px Arial";
 contextBoard.fillStyle = "#000000";
 for(let i = 0; i < 8; i++){
   contextBoard.fillText(num[i], 5, 100*i + 25); /* rows (numbers) */
   contextBoard.fillText(letter[i], 100*i + 80, 795); /* cols (letters) */
 }

 contextBoard.beginPath();
 contextBoard.arc(50, 50, 15, 0, 2 * Math.PI);
 contextBoard.fillStyle = "#d7d7d7";
 contextBoard.fill();
 context.strokeStyle = "#003300";
 contextBoard.stroke();
}

function drawBoardForWhite(){drawBoard("87654321", "abcdefgh", 0);}
function drawBoardForBlack(){drawBoard("12345678", "hgfedcba", 1);}

function setUp(){
 canvasBoard.setAttribute("style", "border:5px solid #67ab23;");
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
