export default function createIteratorObject(report) {
  const employees = [];
  const { allEmployees } = report;

  for (const dept of Object.keys(allEmployees)) {
    employees.push(...allEmployees[dept]);
  }

  return employees;
}
