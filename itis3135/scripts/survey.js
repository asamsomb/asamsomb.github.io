function validateForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const platform = document.getElementById("platform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const additionalInfo = document.getElementById("additionalInfo").value;
    const acknowledgement = document.getElementById("acknowledgeTermsConditions");
    
    if (
        name === "" ||
        mascot === "" ||
        imageCaption === "" ||
        personalBackground === "" ||
        professionalBackground === "" ||
        academicBackground === "" ||
        webDevelopmentBackground === "" ||
        platform === "" ||
        funnyThing === "" ||
        additionalInfo === "" ||
        !acknowledgement.checked
    ) {
        alert("Error: Fields cannot be empty!");
        return false;
    } else {
        submitForm(name, mascot, imageCaption, personalBackground, professionalBackground, academicBackground, webDevelopmentBackground, platform, funnyThing, additionalInfo, acknowledgement);
    }
}

function loadImage() {
    const imageUpload = document.getElementById("introImage").files[0];

    if (!imageUpload) {
        alert("Error: No image selected!");
    }

    const imageUrl = URL.createObjectURL(imageUpload);
    return imageUrl;
}

function addCourse() {
    const coursesContainer = document.getElementById("courses-container");

    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.name = "course";
    courseInput.placeholder = "Course name";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    
    deleteButton.addEventListener("click", () => {
        coursesContainer.removeChild(courseInput);
        coursesContainer.removeChild(deleteButton);
    });

    coursesContainer.appendChild(courseInput);
    coursesContainer.appendChild(deleteButton);
}

document.getElementById("addCourse").addEventListener("click", addCourse);

let count = 0;

function displayCourses() {
    const courseListElement = document.createElement("ul");
    const courseContainer = document.getElementById("courses-container");

    for (let i = 0; i < courseContainer.children.length; i++) {
        const child = courseContainer.children[i];

        if (child.nodeName === "INPUT" && child.value.trim() !== "") {
            const updatedCourse = document.createElement("li");
            updatedCourse.innerText = child.value;
            courseListElement.appendChild(updatedCourse);
        }
    }

    return courseListElement;
    count++;
}

const defaultForm = document.getElementById("introForm").innerHTML;

function submitForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageSrc = loadImage();
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const platform = document.getElementById("platform").value;
    const courses = displayCourses();
    const courseText = courses.textContent;
    const funnyThing = document.getElementById("funnyThing").value;
    const additionalInfo = document.getElementById("additionalInfo").value;
    
    if (imageSrc) {
        const form = document.getElementById("introForm");
        form.innerHTML = `
            <h2>${name}'s || ${mascot}</h2>
            <figure><img src="${imageSrc}" alt="user-image-upload"></figure>
            <figcaption>${imageCaption}</figcaption>
            <ul>
                <li><strong>Personal Background: </strong>${personalBackground}</li>
                <br>
                <li><strong>Professional Background: </strong>${professionalBackground}</li>
                <br>
                <li><strong>Academic Background: </strong>${academicBackground}</li>
                <br>
                <li><strong>Web Development Experience: </strong>${webDevelopmentBackground}</li>
                <br>
                <li><strong>Platform: </strong>${platform}</li>
                <br>
                <li><strong>Courses Currently Enrolled In: </strong></li>
                <ul><li>${courseText}<li></ul>
                <br>
                <li><strong>Funny Thing: </strong>${funnyThing}</li>
                <br>
                <li><strong>Additional Information: </strong>${additionalInfo}</li>
            </ul>
        `;

        const resetButton = document.createElement("button");
        resetButton.textContent = "NEW FORM";
        resetButton.addEventListener("click", function () {
            form.reset();
            form.innerHTML = defaultForm;
        });

        form.appendChild(resetButton);
    }
}

document.getElementById("introForm").addEventListener("submit", validateForm);
document.getElementById("submit").addEventListener("click");