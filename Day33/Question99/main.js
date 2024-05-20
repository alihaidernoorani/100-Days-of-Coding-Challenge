/*Day 33
Question 99: Generate a date object representing your next birthday and log it to the console.*/
function getBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        year = year + 1;
        birthday.setFullYear(year);
    }
    return birthday;
}
var birthday = getBirthday(1, 21);
console.log(birthday.toLocaleDateString());
