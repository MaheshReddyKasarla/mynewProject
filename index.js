var player1name=prompt("enter the name of player 1");
var player2name=prompt("enter the name of  player 2");
if(player1name===""){
  alert("please enter the player 1 name");
  player1name=prompt("enter the name of player");
}
else if (player2name==="") {
  alert("please enter the player 2 name");
  player2name=prompt("enter the name of player 2");
}
document.querySelector(".player1name").innerText=player1name;
document.querySelector(".player2name").innerText=player2name;
function refreshgame(){
var RandomNumber1=Math.random();
  RandomNumber1=RandomNumber1*6;
  RandomNumber1=Math.floor(RandomNumber1)+1;


 var RandomNumber2=Math.random();
  RandomNumber2=RandomNumber2*6;
  RandomNumber2=Math.floor(RandomNumber2)+1;
  document.querySelector(".img1").setAttribute("src","images\\dice"+RandomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images\\dice"+RandomNumber2+".png");

  if(RandomNumber1>RandomNumber2)
  {
    document.querySelector("h1").innerText=player1name+" wins";
  }
  else if (RandomNumber2>RandomNumber1) {
    document.querySelector("h1").innerText=player2name+" wins";
  }
  else {
    document.querySelector("h1").innerText="Both Win";
  }
}


document.querySelector("button").addEventListener("click",refreshgame)
