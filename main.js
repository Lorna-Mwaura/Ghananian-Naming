let year = document.getElementById("year-input");
let month = document.getElementById("month-input");
let date = document.getElementById("day-input");
let gender = document.userdata.gender.value;

function akanName() {
   
    calculateBirthDate ()
    // let btn = document.getElementById("contact.submit");
}


function calculateBirthDate() {
    let CC = year.value.substring(0, 2);
    let YY = year.value.substring(2);
    let MM = month.value;
    let DD = date.value;
    let  d = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    console.log (d)

  return d;
}
// const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
// function gender(maleNames){
// return maleNames ("Your Akan name is" + femaleNames);
//  } 
// console.log("Hey my year is" + year.value)