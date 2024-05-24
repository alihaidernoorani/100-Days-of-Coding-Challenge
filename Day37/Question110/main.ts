/*Day 110
Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.*/

function assignGrade(score: number): string {
    // Assign a grade based on the score
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example usage
const grade = assignGrade(89);
console.log(grade); // Output: B