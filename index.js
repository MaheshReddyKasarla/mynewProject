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
  document.querySelector("h1").innerText="player1 wins";



}
else if (RandomNumber2>RandomNumber1) {
  document.querySelector("h1").innerText="player2 wins";

}
else {
  document.querySelector("h1").innerText="Refresh again";

}
