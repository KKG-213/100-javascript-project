const containerEl = document.querySelector(".container");

const skills = ["Html", "css", "javascript", "react", "node js", "mongodb"];

let skillsindex = 0;
let characterindex = 0;

function updatetext() {
    characterindex++;
    containerEl.innerHTML = `<h1>I am  ${skills[skillsindex].slice(0, 1) === "I" ? "an" : "a"} ${skills[skillsindex].slice(0, characterindex)}</h1>`;
    
    if (characterindex === skills[skillsindex].length) {
        skillsindex = (skillsindex + 1) % skills.length; // Move to the next skill
        characterindex = 0; // Reset character index for the new skill
    }
    
      if (careerIndex === careers.length) {
    careerIndex = 0;
  }
    setTimeout(updatetext, 400);
}

// Start the animation
updatetext();