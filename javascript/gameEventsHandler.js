var canvasBoard = document.getElementById("board");
var contextBoard = canvasBoard.getContext("2d");

function setUp(){
  drawBoard();
}

function drawBoard(){
  let k = 0;
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(k % 2 != 0) contextBoard.fillStyle = "#67ab23"; /* green squares */
      else contextBoard.fillStyle = "#f0f0da"; /* green squares */
      contextBoard.fillRect(100*j, 100*i, 100, 100);
      k++;
    }
    k++;
  }
}

canvasBoard.addEventListener("click", function(){}, false);
