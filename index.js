// TO AVOID LETTERS

function letter(input) {
  var regex = /[^0-9.]/gi;
  input.value = input.value.replace(regex, "");
}

// Reset Input for BMI
let reset = document.querySelector(".reset");

function resetInput() {
  let setWeight = document.querySelector("#weight");
  let setHeight = document.querySelector("#height");

  setWeight.value = "";
  setHeight.value = "";
  window.location.reload();
}
try {
  reset.addEventListener("click", resetInput);
} catch {
  console.log("Smthng Error");
}

// Check Inputs

function checkInput(a, b) {
  if (a.value == "" && b.value == "") {
    alert("Please Put Some Values");
  }
}

// Calculate the BMI

function calculateBmi() {
  let setWeight = document.querySelector("#weight");
  let setHeight = document.querySelector("#height");

  checkInput(setHeight, setWeight);

  let newWeight = parseFloat(setWeight.value);
  let newHeight = parseFloat(setHeight.value);

  let setBmi = (newWeight / (newHeight * newHeight)) * 10000;

  let bmi = setBmi.toFixed(1);

  return bmi;
}

// PUT THE COLOR DEPENDING ON BMI

let styleConfig = {
  underweight: {
    bgColor: "#86b0e1",
    status: "Underweight",
    color: "white",
  },
  normal: {
    bgColor: "#c1e999",
    status: "Normal",
    color: "black",
  },
  overweight: {
    bgColor: "#f2da7f",
    status: "Overweight",
    color: "black",
  },
  obese: {
    bgColor: "#f2da7f",
    status: "Obese",
    color: "black",
  },
  xtremeObese: {
    bgColor: "#ec8688",
    status: "Super Obese",
    color: "white",
  },
};

function checkBmi(value) {
  let result = "";
  if (value < 18.5) {
    result = "underweight";
  }

  if (value > 18.5) {
    result = "normal";
  }

  if (value > 25) {
    result = "overweight";
  }

  if (value > 30) {
    result = "obese";
  }

  if (value > 35) {
    result = "xtremeObese";
  }
  return result;
}

function bmiChange() {
  let result = document.querySelector("#bmiResult");
  let index = document.querySelector("#index");
  let para = document.querySelectorAll(".bmiPar");
  let title = document.querySelectorAll(".bmiTitle");
  let bmiPlate = document.querySelector(".plate");
  let background = document.querySelector(".bmi");

  let currBmi = checkBmi(calculateBmi());

  let { bgColor, status, color } = styleConfig[currBmi];

  background.style.backgroundColor = bgColor;
  index.style.color = color;

  for (let items of para) {
    items.style.color = color;
  }

  for (let items of title) {
    items.style.color = color;
  }

  bmiPlate.style.color = color;
  result.textContent = status;
}

function printBmi() {
  let index = document.querySelector("#index");
  let bmi = calculateBmi();

  index.textContent = bmi;
  bmiChange();
}

// ============= Create Page ===============

let addRecipes = document.querySelector("#addRecipe");
let recipeContainer = document.querySelector("#recipes");
let inputRecipe = document.querySelector("#recipeInput");
let soloRecipe = document.querySelectorAll("#soloRecipe");
try {
  addRecipes.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputRecipe.value.length === 0) {
      alert("Put Some Ingredients");
    } else {
      recipeContainer.innerHTML += `
  <div class="d-flex  soloRecipe text-center">
    <p>${inputRecipe.value}</p>
    <button class="deleteRecipe"><i class="far fa-trash-alt"></i></button>
  </div>

`;

      inputRecipe.value = "";
      let deleteRecipe = document.querySelectorAll(".deleteRecipe");
      for (let deleteBtn of deleteRecipe) {
        deleteBtn.addEventListener("click", function () {
          this.parentNode.remove();
        });
      }
    }
  });

  inputRecipe.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      addRecipes.click();
    }
  });
} catch {
  console.log("Smthng Error");
}
