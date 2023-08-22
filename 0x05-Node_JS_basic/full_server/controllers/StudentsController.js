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
        response.send(res.trim());
        return response.status(200);
      })
      .catch((err) => response.status(500).send(err.message));
  }

  // eslint-disable-next-line consistent-return
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send('Major parameter must be CS or SWE');
      return response.status(500);
    }
    readDatabase(process.argv[2])
      .then((students) => {
        response.send(`List: ${students[major].join(', ')}`);
        return response.status(200);
      })
      .catch((err) => {
        response.send(err.message);
        return response.status(500);
      });
  }
}

export default StudentsController;
