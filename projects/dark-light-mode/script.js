const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  // Optional: Change button text dynamically
  if (body.classList.contains("dark")) {
    mybutton.textContent = "Dark mode";
  } else {
    mybutton.textContent = "Light Mode";
  }
});