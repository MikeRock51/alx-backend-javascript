import fs from 'fs';

function readDatabase(path) {
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
        resolve(students);
      }
    });
  });
}

export default readDatabase;
