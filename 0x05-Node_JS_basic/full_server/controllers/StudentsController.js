import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    let res = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((students) => {
        for (const entry of Object.entries(students).sort()) {
          res += `Number of students in ${entry[0]}: ${
            entry[1].length
          }.\nList: ${entry[1].join(', ')}\n`;
        }
        response.status(200).send(res.trim());
      })
      .catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((students) => {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

export default StudentsController;
