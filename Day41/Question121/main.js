/*Day 41
Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement. */
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; //The continue statement skips the number 5 and continues with the rest of the loop
    }
    console.log(i);
}
