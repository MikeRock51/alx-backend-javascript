function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}

export default getStudentIdsSum;
