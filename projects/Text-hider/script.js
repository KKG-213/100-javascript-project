const collapsibleButton = document.querySelector(".collapsible-button");
const collapsibleContent = document.querySelector(".collapsible-content");

collapsibleButton.addEventListener("click", function () {
  // Agar currently visible hai
  if (collapsibleContent.style.display === "block") {
    collapsibleContent.style.display = "none";
  } else {
    collapsibleContent.style.display = "block";
  }
});
