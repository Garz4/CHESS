/*
 * Coded by: Garz4 (Uriel García Rivas).
 */
var canvasBoard = document.getElementById("board");
var rect = canvasBoard.getBoundingClientRect();
var contextBoard = canvasBoard.getContext("2d");
var turno = 0;

function drawBoard(num, letter, k){
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
}

function drawBoardForWhite(){drawBoard("87654321", "abcdefgh", 0);}
function drawBoardForBlack(){drawBoard("12345678", "hgfedcba", 1);}

function setUp(){
 canvasBoard.setAttribute("style", "border:5px solid #67ab23;");
 drawBoardForWhite();
}

function startOffline(){

}

function startOnline(){

}

class Piece {
  constructor(x, y, id){
    this.movesAllowed = [];
    this.x = x;
    this.y = y;
    this.img = new Image();
    img.onload = function() {
        contextBoard.drawImage(this.img, this.x, this.y, this.x+95, this.y+95);
    }
    img.src = "pieces/Chess_qlt45.svg";
  }
}
