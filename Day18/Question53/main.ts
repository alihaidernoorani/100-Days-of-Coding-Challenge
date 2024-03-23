/*Day 18
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/

//Creating an object representing a programmer's skills
let programmingSkills = {
    languages: ["JavaScript","TypeScript","Python", "Java", "C++"],
    tools: ["React", "Angular", "Vue"],
    frameworks: ["React", "Angular", "Node.js", "Django", ".NET (ASP.NET)"],
};

//Destructuring the object to extract specific properties
let {languages, tools, frameworks} = programmingSkills;

//Logging a specific language, tool, and framework from the extracted properties
console.log(`language: ${languages[4]}, tool: ${tools[2]} and framework: ${frameworks[0]}`);
