
export class classroom {
    classroomId: string;
    classroomName: string;
    classStudent: student[];
    classTeacher: teacher[];
}

export class student {
    studentId: string;
    studentName: string;
    studentAge: number;
    studentTel: string;
}

export class teacher {
    teacherId: string;
    teacherName: string;
    teacherTel: string;
    subjectTaught: string;
}