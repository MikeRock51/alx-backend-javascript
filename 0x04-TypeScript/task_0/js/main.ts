interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const mike: Student = {
    firstName: "Michael",
    lastName: "Adebayo",
    age: 28,
    location: "Abuja",
};

const gloria: Student = {
    firstName: "Gloria",
    lastName: "Adebayo",
    age: 32,
    location: "Abuja",
};

const arr = ["Mike", 2, "Gloria", true];
arr.push('Kate');
arr.push(7);
arr.push(true);

const studentsList: Array <Student> = [mike, gloria];

const table = document.createElement("table") as HTMLTableElement;
const thead = document.createElement("thead") as HTMLTableSectionElement;
const tbody = document.createElement("tbody") as HTMLTableSectionElement;
const rowHead = thead.insertRow(0) as HTMLTableRowElement;
const cellHead1 = rowHead.insertCell(0) as HTMLTableCellElement;
const cellHead2 = rowHead.insertCell(1) as HTMLTableCellElement;

cellHead1.innerHTML = "First Name";
cellHead2.innerHTML = "Location";

table.append(thead);


studentsList.forEach(student => {
    const row = tbody.insertRow(0) as HTMLTableRowElement;
    const cell1 = row.insertCell(0) as HTMLTableCellElement;
    const cell2 = row.insertCell(1) as HTMLTableCellElement;

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

table.append(tbody);
body.append(table);
