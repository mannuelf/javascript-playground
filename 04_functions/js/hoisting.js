closeMouth(); // Fn Exp, Cannot access 'closeMouth' before initialization

function openMouth() {
  console.log("Opening Mouth"); // Funtion Declaration, all fn declaarations get moved to the top of the file
}

let closeMouth = function() {
  console.log("Closing Mouth"); // Function Expression, Anonymous
}

openMouth();
