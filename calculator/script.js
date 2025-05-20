
let result = document.getElementById("result");
let current = "";

function inputValue(val) {
  if (val === "+/-") {
    current = eval(current) * -1 + "";
  } else if (val === "%") {
    current = eval(current) / 100 + "";
  } else {
    current += val;
  }
  result.textContent = current;
}

function clearDisplay() {
  current = "";
  result.textContent = "0";
}

function calculate() {
  try {
    current = eval(current).toString();
    result.textContent = current;
  } catch {
    result.textContent = "Error";
  }
}
