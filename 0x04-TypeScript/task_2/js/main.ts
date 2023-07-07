interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Getting coffee break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

type numOrStr = number | string;
type D_or_T = DirectorInterface | TeacherInterface;

function createEmployee(salary: numOrStr): D_or_T {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

function isDirector(employee: D_or_T): boolean {
    return employee instanceof Director;
}

function executeWork(employee: D_or_T): string {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    } else {
        return (employee as Teacher).workTeacherTasks();
    }
}

console.log((executeWork(createEmployee(200))));
console.log(executeWork(createEmployee(1000)));
