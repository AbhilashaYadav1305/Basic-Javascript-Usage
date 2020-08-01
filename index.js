var randomNum1 = Math.ceil(Math.random()*6);

var randomStr1 = "dice"+randomNum1+".png";

var linkset1 = document.querySelector(".dice .img1").getAttribute("src");

var randomNum1 = linkset1.replace("dice6.png",randomStr1);

document.querySelector(".dice .img1").setAttribute("src",randomNum1);

var randomNum2 = Math.ceil(Math.random()*6);

var randomStr2 = "dice"+randomNum2+".png";

var linkset2 = document.querySelector(".dice .img2").getAttribute("src");

var randomNum2 = linkset2.replace("dice6.png",randomStr2);

document.querySelector(".dice .img2").setAttribute("src",randomNum2);

if(randomNum1> randomNum2){
  document.getElementById("msg").innerHTML = "<div> <h1>Player 1 wins! </h1><p> Please Refresh to continue..</p></div>";

}
else if(randomNum1 === randomNum2){
    document.getElementById("msg").innerHTML = "<div> <h1>Draw !!</h1><p> Please Refresh to continue..</p></div>";
}
else{
  document.getElementById("msg").innerHTML = "<div> <h1>Player 2 wins! </h1><p> Please Refresh to continue..</p></div>";
}
