var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player1 wins! 😎";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player2 wins! 😎";
}
else if(randomnumber1 = randomnumber2){
    document.querySelector("h1").innerHTML = "Draw 🙄";
}