var background = document.getElementsByTagName("body")[0];
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
   background.style.background = "red";
});