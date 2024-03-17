/*Day 13
Question 38: Cities: Describing cities with a function.*/

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi"); //Calls function describe_city() using Karachi as the city and uses the default value of Pakistan
describe_city("Lahore"); //Calls function describe_city() using Lahore as the city and uses the default value of Pakistan
describe_city("Paris", "France"); //Calls function describe_city() using Paris as the city and France as the country