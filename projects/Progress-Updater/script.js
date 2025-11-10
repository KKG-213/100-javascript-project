 const progressBar = document.getElementById("progressBar");
    const updateButton = document.getElementById("updateButton");
    const resetButton = document.getElementById("resetButton");

    let progress = 0;

    updateButton.addEventListener("click", function () {
      if (progress < 100) {
        progress += 10; // increment progress
        progressBar.style.width = progress + "%";
        // progressBar.setAttribute("aria-valuenow", progress);
      }
    });

    resetButton.addEventListener("click", function () {
      progress = 0;
      progressBar.style.width = "0%";
    //   progressBar.setAttribute("aria-valuenow", progress);
    });