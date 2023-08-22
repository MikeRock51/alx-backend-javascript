import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    res = 'This is the list of our students\n';
    readDatabase(process.argv[2]).then((students) => {
      for (const entry of Object.entries(students).sort()) {
        response.status(200).send(`${res}Number of students in ${entry}: ${students[entry[0]].length}. List: ${students[entry[1]].join(', ')}`);
      }
      return response.status(200);
    }).catch((err) => {
      return response.status(500).send(err.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params();
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    readDatabase(process.argv[2]).then((students) => {
      response.status(200).send(`List: ${students[major]}`);
    }).catch((err) => {
      response.status(500).send(err.message);
    });
    }
  }
}

export default StudentsController;
