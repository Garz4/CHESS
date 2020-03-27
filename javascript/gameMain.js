/*
 * Coded by: Garz4 (Uriel García Rivas).
 */
const canvasBoard = document.getElementById("board");
const rect = canvasBoard.getBoundingClientRect();
const contextBoard = canvasBoard.getContext("2d");
const backgroundBoard = document.getElementById("tdBoard");
var turno = 0;
var imgs = new Array();

class Piece {
  constructor(x, y, id){
    this.id = id;
    this.movesAllowed = new Array();
    this.x = x;
    this.y = y;
  }

  printMovesAllowed(){

  }
}

var peon1 = new Piece(0,0,0);
