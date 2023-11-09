let person = ["Brad Litt", "Angelina Grolie", "Taylor Swith"];
let salaries = [100600, 500000, 2000000];

document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var salaryInput = document.getElementById("salary");
    var addSalaryBtn = document.getElementById("addSalary");
    var result = document.getElementById("average");
    var tableResult = document.getElementById("results_table");
    var displaySalaryBtn = document.getElementById("displaySalary");
    var displayResultsBtn = document.getElementById("displayResults");
    var option = document.getElementById("employee_select");

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
            alert("ERROR: Employee Name and Salary cannot be empty!");
        }

        nameInput.focus();
    }

    function displayResults() {
        var average = 0;
        var highest = 0;

        for (var i = 0; i < salaries.length; i++) {
            average += salaries[i];

            if (salaries[i] > highest) {
                highest = salaries[i];
            }
        }

        if (salaries.length != 0) {
            average = average / salaries.length;
        }

        result.innerHTML = "<p><strong> Average Salary: $" + average + "</strong></p>";
        result.innerHTML += "<p><strong> Highest Salary: $" + highest + "</strong></p>";
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

    function displaySelection() {
        option.innerHTML = "";
    
        for (var i = 0; i < person.length; i++) {
            var newOption = document.createElement("option");
            newOption.value = i;
            newOption.text = person[i];
            option.appendChild(newOption);
        }
    }

    displaySalaryBtn.addEventListener("click", displaySalary);
    addSalaryBtn.addEventListener("click", addSalary);
    displayResultsBtn.addEventListener("click", displayResults);
    option.addEventListener("click", displaySelection);
});
