const fs = require('fs');

students = {}

fs.readFile('./database.csv', 'UTF-8', (err, data) => {
	if (err) {
		throw new Error('Cannot load the database')
	}
	lines = data.split('\n');
	if (lines[lines.length -1] == '') {
		delete lines.pop()
	}
	console.log(lines);
	for (let i = 1; i < lines.length; i++) {
		const student = lines[i].split(',');
		const field = student[3];
		const firstname = student[0];
		if (students[field]) {
			students[field].push(firstname);
		} else {
			students[field] = [firstname];
		}
	}
	console.log(students);
})

