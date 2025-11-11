// const createArrayWithStr = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObj = (value: { id: number; name: string }) => {
//     return [value]
// };

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(12345);
const arrObject = createArrayWithGeneric({
  id: 12345,
  name: "Next Level WebDevelopment",
});

// tuple
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

// Generic
const createArayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArayTupleWithGeneric("Hasan", false);
const res2 = createArayTupleWithGeneric(222, {
  name: "Hasan",
  id: 12345,
  designation: "manager",
});

//

const addStudentTocourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};
const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentTocourse(student1);
console.log(result);
