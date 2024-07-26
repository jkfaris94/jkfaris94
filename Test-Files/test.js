const students = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Rebecca Mills", score: 8.7 },
];

// Function being tested
function highestScore(students) {
    let result = null;
    if (!students || !students.length) {
      return result;
    }
  
    let highScore = 0;
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.score > highScore) {
        highScore = student.score;
        result = student;
      }
    }
  
    return result;
  }

// Setup phase
const input = [
  { name: "Shane Carey", score: 9.5 },
  { name: "Rebecca Mills", score: 8.7 },
];
const expected = input[0];

// Run phase
const actual = highestScore(input);

// Check phase
if (expected.name === actual.name && expected.score === actual.score) {
  console.log("Test passed.");
} else {
  console.log(
    "highestScore() did not return the student with the highest score."
  );
}