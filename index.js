// Get input and result elements
const num1 = document.getElementById("One");
const num2 = document.getElementById("Two");
const result = document.getElementById("result");

// Get buttons
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtraction");
const multiplyBtn = document.getElementById("multiplication");
const divideBtn = document.getElementById("divide");

// Function to get parsed input values
function getInputValues() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    return [val1, val2];
}

// Event listeners for each operation
addBtn.addEventListener("click", () => {
    const [val1, val2] = getInputValues();
    result.value = val1 + val2;
});

subtractBtn.addEventListener("click", () => {
    const [val1, val2] = getInputValues();
    result.value = val1 - val2;
});

multiplyBtn.addEventListener("click", () => {
    const [val1, val2] = getInputValues();
    result.value = val1 * val2;
});

divideBtn.addEventListener("click", () => {
    const [val1, val2] = getInputValues();
    if (val2 === 0) {
        result.value = "Cannot divide by 0";
    } else {
        result.value = val1 / val2;
    }
});
