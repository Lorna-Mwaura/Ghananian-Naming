let year = document.getElementById("year-input");
let month = document.getElementById("month-input");
let date = document.getElementById("day-input");
let gender = document.userdata.gender.value;

function akanName() {
    // akanName = birthDate + Gender 

    calculateBirthDate()
         // let btn = document.getElementById("contact.submit");
// }


function calculateBirthDate() {
    let CC = year.value.substring(0, 2);
    let YY = year.value.substring(2);
    let MM = month.value;
    let DD = date.value;
    let d = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)
    console.log(d)

    return d;
}
function gender () {
let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 
 let index;
 
 if (dayOfWeekNumber == 0){
   index = 6;
 } else {
   index = dayOfWeekNumber - 1;
 }
 console.log(index);
 if (gender == "male") {
   document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleNames[index];
   document.getElementById('display-name').textContent = "Here is your Akan name:

else if (gender==="female") {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleNames[index];
   document.getElementById('display-name').textContent = "Here is your Akan name:
}