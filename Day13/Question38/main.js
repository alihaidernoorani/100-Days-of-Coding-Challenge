/*Day 13
Question 38: Cities: Describing cities with a function.*/
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi"); //Calls function describe_city() using Karachi as the city and uses the default value of Pakistan
describe_city("Lahore"); //Calls function describe_city() using Lahore as the city and uses the default value of Pakistan
describe_city("Paris", "France"); //Calls function describe_city() using Paris as the city and France as the country
