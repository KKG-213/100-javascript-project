const myButton = document.getElementById("mybutton");
const colorBox = document.getElementById("colorbox");

myButton.addEventListener("click", function(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;

});