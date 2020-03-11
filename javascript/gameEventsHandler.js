/*
 * Coded by: Garz4 (Uriel García Rivas).
 */
var canvasBoard = document.getElementById("board");
var contextBoard = canvasBoard.getContext("2d");
canvasBoard.addEventListener("click", function(){}, false);

function setUp(){
  drawBoardForWhite();
}

function drawBoardForWhite(){drawBoard("87654321", "abcdefgh", 0);}
function drawBoardForBlack(){drawBoard("12345678", "hgfedcba", 1);}

function drawBoard(num, letter, k){
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(k % 2 != 0) contextBoard.fillStyle = "#67ab23"; /* green squares */
      else contextBoard.fillStyle = "#f0f0da"; /* green squares */
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
