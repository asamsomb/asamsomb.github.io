function clearScreen() {
    document.getElementById("calculation").value="";
}

function display(value) {
    document.getElementById("calculation").value += value;
}

function calculate() {
    var x = document.getElementById("calculation").value;
    var y = eval(x);

    document.getElementById("calculation").value = y;
}