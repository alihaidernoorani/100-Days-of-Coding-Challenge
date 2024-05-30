/* Day 43
Question 129: Explain how this behaves differently in arrow functions compared to traditional functions. */
var _this = this;
// Demonstrating 'this' in traditional vs. arrow functions
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
