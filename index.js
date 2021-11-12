var randomNumber1=Math.floor((Math.random()*6)+1);
var randomImage1="images/"+"dice"+randomNumber1+".png";
var img1=document.querySelector(".img1");
img1.setAttribute("src",randomImage1);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomImage2="images/"+"dice"+randomNumber2+".png";
var img2=document.querySelector(".img2");
img2.setAttribute("src",randomImage2);

var headingText=document.querySelector(".container h1");
if(randomNumber1>randomNumber2)
headingText.innerHTML="🏆 Player 1 Wins!";

else if(randomNumber1<randomNumber2)
headingText.innerHTML="Player 2 Wins! 🏆";

if(randomNumber1==randomNumber2)
headingText.innerHTML="Draw!";