const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const myparagraph = document.getElementById("myparagraph");

increaseBtn.addEventListener("click", function(){
    let currentFontSize = parseFloat(
        window.getComputedStyle(myparagraph, null).getPropertyValue("font-size")
    );
    myparagraph.style.fontSize = currentFontSize + 2 + "px";


});

decreaseBtn.addEventListener("click", function(){
   
let currentFontSize = parseFloat(
        window.getComputedStyle(myparagraph, null).getPropertyValue("font-size")
    );
    myparagraph.style.fontSize = currentFontSize - 2 + "px";

});