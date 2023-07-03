function updateStudentGradeByCity(studentsList, city, newGrade) {
  const cityStudents = studentsList.filter((student) => student.location === city);

  for (const student of cityStudents) {
    for (const grade of newGrade) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
      }
    }
  }
  return cityStudents.map(((student) => {
    if (!student.grade) {
      return { ...student, grade: 'N/A' };
    }
    return student;
  }));
}

export default updateStudentGradeByCity;
