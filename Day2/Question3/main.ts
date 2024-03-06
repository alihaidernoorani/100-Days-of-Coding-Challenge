/*Day 2
Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after stripping the white spaces.*/

let newPersonName: string = " \t \n  Ali Haider Noorani  \t \n "; //Stores a person's name with whitespace 
console.log("Name with whitespace: ", newPersonName); //Prints original name with whitespace
console.log("Name without whitespace: ", newPersonName.trim());