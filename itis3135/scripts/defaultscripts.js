function displayCurrentDateTime() {
    var currentDateTimeElement = document.getElementById('currentDateTime');
    var datetime = new Date();
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = datetime.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = datetime.getFullYear();
    var hours = datetime.getHours() >= 12 ? datetime.getHours() - 12 : datetime.getHours();
    var minutes = datetime.getMinutes();

    var dayOfWeek = weekdays[datetime.getDay()];
    var month = months[datetime.getMonth()];

    var formattedDateTime = `Today is ${dayOfWeek}, ${month} ${day}, ${year} at ${hours}:${minutes} ${hours ? 'PM' : 'AM'}.`;

    currentDateTimeElement.textContent = formattedDateTime;
}

window.addEventListener('load', displayCurrentDateTime);

function displayGreeting() {
    var name = document.getElementById("name").value;
    var feeling = document.getElementById("feeling").value;

    alert("Samsombath Solutions welcomes you, " + name + "! We're glad you're feeling " + feeling + "!");
}

function displayPolygon() {
    var number = Math.abs(Math.round(document.getElementById("number").value));
    var polygons = ['Not a Polygon! :P', 'a Henagon!', 'a Digon!', 'a Trigon!', 'a Tetragon!', 'a Pentagon!', 'a Hexagon!', 'a Heptagon!', 'an Octagon!',
    'an Enneagon!', 'a Decagon!'];

    var polygon = polygons[number];

    alert("Your favorite number " + number + " is " + polygon);
}

function displaySpiritAnimal() {
    var number = prompt("Enter a Number Between 0 and 25: ");
    var animals = ['Alpaca', 'Bat', 'Cat', 'Dog', 'Elephant', 'Frog', 'Giraffe', 'Hippo', 'Iguana', 'Jaguar', 'Kangaroo', 
    'Lion', 'Mouse', 'Nutria', 'Okapi', 'Panda', 'Qinling Panda', 'Racoon', 'Sloth', 'Tamarin', 'Uinta Chipmunk', 'Vulture', 'Walrus', 
    'Xantusia', 'Yak', 'Zebra'];

    var animal = animals[number];

    alert("Your spirit animal for your entered value of " + number + " is a/an " + animal + "!");
}

function calculateTip() {
    var billAmount = parseFloat(prompt("Enter bill amount: "));
    
    var fivePercent = (5/100) * billAmount;
    var tenPercent = (10/100) * billAmount;
    var fifteenPercent = (15/100) * billAmount;

    var message = "Bill Amount: $" + billAmount + "\n" + "\t5% Tip of " + billAmount + " is $" + fivePercent.toFixed(2) + "\n" + "\t10% Tip of " + billAmount + " is $" + tenPercent.toFixed(2) + "\n" +
    "\t15% Tip of " + billAmount + " is $" + fifteenPercent.toFixed(2);

    alert(message);
}

function fahrenheitToCelcius() {
    var fahrenheit = parseFloat(prompt("Enter the Fahrenheit: "));
    var celcius = (fahrenheit - 32) * (5/9);

    var message = fahrenheit + " converted to Celcius is " + celcius.toFixed(1) + " degrees Celcius.";

    alert(message);
}

function mendHeart() {
    var message = "\u2764\uFE0F" + " You fixed the broken heart!";
    alert(message);
}

function areaPerimeterRectangle() {
    var length = parseFloat(prompt("Enter a Value for Length: "));
    var width = parseFloat(prompt("Enter a Value for Width: "));

    var perimeter = 2 * (length + width);
    var area = length * width;

    var message = "Length: " + length + "\nWidth: " + width + "\n\nPerimeter: " + perimeter + "\nArea: " + area;

    alert(message);
}