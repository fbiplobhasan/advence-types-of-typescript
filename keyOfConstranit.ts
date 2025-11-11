type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type PoorPeople1 = "bike" | "car" | "cng";
type PoorPeople2 = keyof RichPeopleVehicle;

const myVehicle: PoorPeople2 = "car";

//* key of constraint

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 123,
  name: "Hasan",
  address: {
    city: "ctg",
  },
};
//const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"]

// console.log(myId,myName,address);

const getPropertyFromObject = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObject(user, "emni");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObject(product, "brand");
const result3 = getPropertyFromObject(student, "id");

// console.log(result2,result3);
