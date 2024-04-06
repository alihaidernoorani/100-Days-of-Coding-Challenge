/*Day 22
Question 64: Combine Strings and Numbers: Write a function that merges a piece of text
with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".*/
function mergeText(text, age) {
    return text + age;
}
console.log(mergeText("Age: ", 30));
