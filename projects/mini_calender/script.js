const timesection = document.getElementById("timesection");


const currentDate = new Date();
const year = currentDate.getFullYear();
// getMonth() returns 0-indexed month (0 for January, 11 for December)
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();


headOfbox.innerHTML = month;
boxPage.innerHTML = `${day}` ;
