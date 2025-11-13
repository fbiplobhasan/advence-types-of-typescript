"use strict";
//generic function
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentTocourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
    dateOfBirth: '24-12-2502',
    class: 'seven'
};
const student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
    dateOfBirth: '20-56-4585',
    class: 'eight'
};
const student3 = {
    id: 444,
    hasWatch: true,
    name: "Adbur Rakib",
    dateOfBirth: '23-56-4578',
    class: 'nine'
};
const result = addStudentTocourse(student3);
console.log(result);
//# sourceMappingURL=constraint.js.map