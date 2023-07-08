import Teacher from "./Teacher";

namespace Subjects {
    class Subject {
        teacher: Teacher;

        setTeacher(teacherInfo: Teacher) {
            this.teacher = teacherInfo;
        }
    }
}
