function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((student) => student.location === city);
}

export default getStudentsByLocation;
