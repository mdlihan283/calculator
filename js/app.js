// dom Selection
let input = document.getElementById("input");
let button = document.querySelectorAll("#clickBtn");

// creating function

// input function
function addInput(number) {
  input.value = input.value + number;
}

// result function
function result() {
  if (input.value) {
    let result = eval(input.value);
    input.value = "";
    input.value = input.value + result;
  }
}

// c function
function blankDis() {
  input.value = "";
}
