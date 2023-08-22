import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    console.log('This is the list of our students');
    readDatabase(process.argv[2]).then((students) => {
      for (const entry of Object.entries(students).sort()) {
        console.log(`Number of students in ${entry}: ${students[entry[0]].length}. List: ${students[entry[1]].join(', ')}`);
      }
      return response.status(200);
    }).catch((err) => {
      console.log(err.message);
      return response.status(500);
    });
  }

  static getAllStudentsByMajor(request, response) {
    
  }
}

export default StudentsController;
