const sometext= document.getElementById("sometext");
const charcount = document.getElementById("charcount");

sometext.addEventListener("input", ()=>{
    const remaining = 50 - sometext.value.length;
    charcount.textContent = remaining;
})