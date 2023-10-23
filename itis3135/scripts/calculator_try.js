/* reference: https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/ */

document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("number1").addEventListener("click", function () {display(1);});
document.getElementById("number2").addEventListener("click", function () {display(2);});
document.getElementById("number3").addEventListener("click", function () {display(3);});
document.getElementById("number4").addEventListener("click", function () {display(4);});
document.getElementById("number5").addEventListener("click", function () {display(5);});
document.getElementById("number6").addEventListener("click", function () {display(6);});
document.getElementById("number7").addEventListener("click", function () {display(7);});
document.getElementById("number8").addEventListener("click", function () {display(8);});
document.getElementById("number9").addEventListener("click", function () {display(9);});
document.getElementById("number0").addEventListener("click", function () {display(0);});

function display(value) {
    const calculation = document.getElementById("calculation");
    calculation.value += value;
}

function clearScreen() {
    const calculation = document.getElementById("calculation");
    calculation.value = '';
}

function calculate() {
    const calculation = document.getElementById('calculation');
    try {
        calculation.value = eval(calculation.value);
    } catch (error) {
        calculation.value = 'Cannot Calculate!';
    }
}
