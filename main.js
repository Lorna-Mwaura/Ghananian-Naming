// function akanName() {
//     let year = document.getElementbyId("year");
//     let month = document.getElementbyId("month");
//     let date = document.getElementbyId("date");
//     let btn = document.getElementById("contact.submit");
// }

function calculateBirthDate() {
    let  d = Math.floor
    ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    let CC = year.value.str.substring(0, 2);
    let YY = year.value.str.substring(2);
    let MM = month.value;
    let DD = date.value;
  return d;
}
// const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
// function gender(maleNames){
// return maleNames ("Your Akan name is" + femaleNames);
//  } 
console.log("Hey my year is" + year.value)