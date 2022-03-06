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
 
 if (dayOfWeek == 0){
   index = 6;
 } else {
   index = dayOfWeek - 1;
 }
 console.log(index);
 if (gender == "male") {
    alert = " your Akan name is " + maleNames[index];

else (gender==="female") 
    alert = " your Akan name is " + femaleNames[index];}
