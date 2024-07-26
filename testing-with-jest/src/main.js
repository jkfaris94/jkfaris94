function findHighestScoringStudent(students) {
    let student = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > student.score) {
        student = students[i];
      }
    }
    return student;
  }
  
  module.exports = findHighestScoringStudent;

  const mathStudents = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Catarina Lima", score: 9.7 },
    { name: "Rebecca Mills", score: 8.7 },
  ];
  findHighestScoringStudent(mathStudents); //> { name: "Catarina Lima", score: 9.7 }