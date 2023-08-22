const fs = require('fs');

function countStudents(path) {
  const students = {};

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    if (lines[lines.length - 1] === '') {
      lines.pop();
    }
    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');
      const field = student[3];
      const firstname = student[0];

      if (students[field]) {
        students[field].push(firstname);
      } else {
        students[field] = [firstname];
      }
    }
    for (const field in students) {
      if (students[field]) {
        const firstnames = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${firstnames}`);
      }
    }
  });
}

module.exports = countStudents;
