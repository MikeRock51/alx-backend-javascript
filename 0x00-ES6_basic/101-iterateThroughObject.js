export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  let idx = reportWithIterator.length;

  for (const item of reportWithIterator) {
    employees += item;
    if (idx > 1) {
      employees += ' | ';
    }
    idx -= 1;
  }

  return employees;
}
