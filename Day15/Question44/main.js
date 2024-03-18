/*Day 15
Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.*/
function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("A sandwitch containing ".concat(ingredients, " was ordered"));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
