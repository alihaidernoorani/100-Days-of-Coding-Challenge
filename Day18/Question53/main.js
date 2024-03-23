/*Day 18
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/
//Creating an object representing a programmer's skills
var programmingSkills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    tools: ["React", "Angular", "Vue"],
    frameworks: ["React", "Angular", "Node.js", "Django", ".NET (ASP.NET)"],
};
//Destructuring the object to extract specific properties
var languages = programmingSkills.languages, tools = programmingSkills.tools, frameworks = programmingSkills.frameworks;
//Logging a specific language, tool, and framework from the extracted properties
console.log("language: ".concat(languages[4], ", tool: ").concat(tools[2], " and framework: ").concat(frameworks[0]));
