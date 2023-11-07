let person = [];
let salaries = [];

document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var salaryInput = document.getElementById("salary");
    var addSalaryBtn = document.getElementById("addSalary");
    var displayResults = document.getElementById("results");
    var averageResult = document.getElementById("average");
    var highestResult = document.getElementById("highest");
    var tableResult = document.getElementById("results_table");
    var displaySalaryBtn = document.getElementById("displaySalary");
    var displayResultsBtn = document.getElementById("displayResults");

    function addSalary() {
        var name = nameInput.value;
        var salary = parseFloat(salaryInput.value);

        if (name && !isNaN(salary)) {
            person.push(name);
            salaries.push(salary);

            console.log("Person Array:", person);
            console.log("Salaries Array:", salaries);

            nameInput.value = "";
            salaryInput.value = "";

        } else {
            alert("ERROR: Please review Employee Name and Salary!");
        }
    }

    function calculateAverage() {
        if (salaries.length === 0) {
            return 0;
        }

        var sum = salaries.reduce((acc, val) => acc + val, 0);
        return sum / salaries.length;
    }

    function displayResults() {
        var average = calculateAverage();
        var highest = Math.max(...salaries);

        averageResult.innerHTML = `Average Salary: $${average.toFixed(2)}`;
        highestResult.innerHTML = `Highest Salary: $${highest.toFixed(2)}`;
    }

    function displaySalary() {
        tableResult.innerHTML = "";

        for (let i = 0; i < person.length; i++) {
            var row = tableResult.insertRow(-1);
            var nameCell = row.insertCell(0);
            var salaryCell = row.insertCell(1);

            nameCell.textContent = person[i];
            salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
        }
    }

    displaySalaryBtn.addEventListener("click", displaySalary);
    addSalaryBtn.addEventListener("click", addSalary);
    displayResultsBtn.addEventListener("click", displayResults);
    nameInput.focus();
});
