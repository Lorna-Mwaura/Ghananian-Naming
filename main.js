let year = document.getElementById("year-input");
let month = document.getElementById("month-input");
let date = document.getElementById("day-input");
// let gender = document.userdata.gender.value;
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let userForm = document.getElementById("form")
userForm.addEventListener("submit", (eventLona) => {
    eventLona.preventDefault()
    // let gender = document.userdata.gender.value;
    // alert(gender)
    calculateBirthDate()
})

function calculateBirthDate() {
    let CC = year.value.substring(0, 2);
    let YY = year.value.substring(2);
    let MM = month.value;
    let DD = date.value;
    let gender = document.userdata.gender.value;
    let d = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)
    if (gender == "male") {
        alert(" your Akan name is " + maleNames[d]);
    } else if (gender === "female")
        alert(" your Akan name is " + femaleNames[d]);
}