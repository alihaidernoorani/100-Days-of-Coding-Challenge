// Q: The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?

// Ans: No difference. It will work the same



// Q: The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  // Rewrite it, to perform the same, but without if, in a single line.
  
  // Make two variants of checkAge:
  
  // 1) Using a question mark operator ?
  // 2) Using OR ||
  
  
  // Ans:
  
  // function with question mark operator
  function checkAge(age) {
      return (age > 18) ? true : confirm('Did parents allow you?');
  }
  
  // function with OR operator
  function checkAge(age) {
      return (age > 18) || confirm('Did parents allow you?');
  }


// Q: Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// Ans:

function min(a,b) {
    return (a > b) ? b : a;
}