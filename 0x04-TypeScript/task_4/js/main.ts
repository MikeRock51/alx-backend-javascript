/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Teacher.ts" />

console.log(Subjects.Cpp);

namespace Subjects {
    export const cpp = Cpp;
    export const java = Java;
    export const react = React;

    export const cTeacher: Teacher = {
        firstName: "Michael",
        lastName: "Adebayo",
        experienceTeachingC: 10,
    }
}

