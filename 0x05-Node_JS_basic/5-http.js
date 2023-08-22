const http = require('http');
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

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.write('This is the list of our students\n');
        res.write(output.trim());
        res.end();
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err.message);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
