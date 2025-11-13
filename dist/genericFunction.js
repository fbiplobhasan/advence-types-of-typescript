"use strict";
// const createArrayWithStr = (value: string) => [value];
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObj = (value: { id: number; name: string }) => {
//     return [value]
// };
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(12345);
const arrObject = createArrayWithGeneric({
    id: 12345,
    name: "Next Level WebDevelopment",
});
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2,
];
// Generic
const createArayTupleWithGeneric = (param1, param2) => [
    param1,
    param2,
];
const res1 = createArayTupleWithGeneric("Hasan", false);
const res2 = createArayTupleWithGeneric(222, {
    name: "Hasan",
    id: 12345,
    designation: "manager",
});
// //generic function
// const addStudentTocourse = <T>(studentInfo: T) => {
//   return {
//     course: "Next Level",
//     ...studentInfo,
//   };
// };
// const student1 = {
//   id: 123,
//   name: "Mezba",
//   hasPen: true,
// };
// const student2 = {
//   id: 321,
//   name: "Jhankar Mahbub",
//   hasCar: true,
//   isMarried: true,
// };
// const result = addStudentTocourse(student2);
// console.log(result);
//# sourceMappingURL=genericFunction.js.map