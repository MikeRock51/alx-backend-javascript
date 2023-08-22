const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const students = {};

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        if (lines[lines.length - 1] === '') {
          lines.pop();
        }
        const numStudents = lines.length - 1;

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
        let output = `Number of students: ${numStudents}\n`;
        for (const field in students) {
          if (students[field]) {
            const firstnames = students[field].join(', ');
            output += `Number of students in ${field}: ${students[field].length}. List: ${firstnames}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (!process.argv[2]) {
    res.send('Cannot load the database');
  }
  countStudents(process.argv[2]).then((output) => {
    const str = `This is the list of our students\n${output}`;
    res.send(str.trim());
  }).catch((err) => {
    res.send(err.message);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
