//* noramal function
// function addNormal(num1: number, num2: number): number {
//   return num1 + num2;
// }

// addNormal(2, 6);

//* arrow function
// const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(2, 3);

//* object er vitore function
// const poorUser = {
//   name: "Mezba",
//   balance: 0,
//   addBalance(value: number): number {
//     const totalBalance = this.balance + value;
//     return totalBalance;
//   },
// };

// poorUser.addBalance(100000);

// const arr: number[] = [1, 5, 6];
// const sqrArray = arr.map((elem: number): number => elem * elem);

//* array er mlddhe push kora spead er maddhome
// const friends = ["habid","nabid"]
// const schoolFriends = ["ayub","haasn","abid"]
// const chollegeFriends = ["mr","ms","mrs"]

// friends.push(...schoolFriends)
// console.log(friends);

// const user = {
//     name: "Mezba",
//     phoneNumber: '01744554'
// }

// const otherInfo = {
//     hobby: "hangout",
//     fabouriteColor: "Black"
// }

// const userInfoAll = {...user,...otherInfo};
// console.log(userInfoAll);

// const sendInvite = (...friends:string[]) => {
//     friends.forEach((friend: string) => console.log(`Send invitation to ${friend}`))

// }
// sendInvite('pun','chun','hun','ff','fjdkfk')

//* destructuring

// const user = {
//     name:{
//         firstName:  'Mezba',
//         middleName: "abedin",
//         lastName: 'persin'
//     },
//     id:123,
//     address: {
//         village: 'jugipara',
//         city: 'Rangpur'
//     }
// }

// const myMiddleName = user.name.middleName;
// const myCity = user.address.city;

// const {name:{firstName,lastName,middleName},id} = user;

// const friends = ['rahim','karim','azad']
// const mybestFriennd = friends[2]
// // console.log(mybestFriennd);

// const [d,f,myBesty] = friends;
// console.log(d,f,myBesty);

//* type alias

// type User = {
//   id: number;
//   name: {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//   };
//   gender: "male" | "female";
//   contactNo: string;
//   address: {
//     division: string;
//     city: string;
//   };
// };

// const user1: User = {
//   id: 12554,
//   name: {
//     firstName: "azad",
//     middleName: "bashar",
//     lastName: "shaheb",
//   },
//   gender: "male",
//   contactNo: "457665",
//   address: {
//     division: "rangpur",
//     city: "kurigram",
//   },
// };

// *boolean type alias defined
// type IsAdmin = true;
// const isAdmin: IsAdmin = true;

// type Name = string;
// const myName: Name = "Me.X";

// * function type alias
// type AddFunc = (num1: number, num2: number) => number;

// const add: AddFunc = (num1, num2) => num1 + num2;

// *union
// type UserRole = "admin" | "user";

// const getDashboard = (role: UserRole) => {
//   if (role === "admin") {
//     return "Admin Dashboard";
//   } else if (role === "user") {
//     return "User Dashboard";
//   } else {
//     return "Guest Dashboard";
//   }
// };

// getDashboard("user");

// * intersection
// type Employee = {
//   id: string;
//   name: string;
//   phonNo: string;
// };
// type Manager = {
//   designation: string;
//   teamSize: number;
// };
// type EmployeeManager = Employee & Manager;

// const chowDhuryShaheb: EmployeeManager = {
//   id: "123",
//   name: "Chowdhury Shaheb",
//   phonNo: "211432",
//   designation: "manager coo operative",
//   teamSize: 25,
// };

// * ternary operator
// const biyerJonnoEligble = (age: number) => {
//   // if(age >= 21){
//   //     console.log("You are eligible.");
//   // } else{
//   //     console.log("You are not eligible");
//   // }
//   const result = age >= 21 ? "You are eligible" : "You are not eligble.";
//   console.log(result);
// };

// biyerJonnoEligble(22);

// * nullish coalescing operator
//* ata kaj korbe just null and undefined er upor

// const userTheme = undefined;
// const selectedTheme = userTheme ?? 'Light theme';
// console.log(selectedTheme);

// // *difference between nullish and ternary
// const isAuthenticated = '';

// // ternary
// const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";

// // nullish coalescing
// const resultWithNullish = isAuthenticated ?? "You are guest";

// console.log({resultWithNullish,resultWithTernary});

//* optional chaining
// const user: {
//   name: string;
//   address: {
//     city: string;
//     postalCode?: string;
//   };
// } = {
//   name: "azahar",
//   address: {
//     city: "Rangpur",
//   },
// };

// const postalcode = user?.address?.postalCode;
// console.log(postalcode);

// ** nullable,never and unknown

//* nullable type
// const getUser = (input: string | null) => {
//   if (input) {
//     console.log(`From DB: ${input}`);
//   } else {
//     console.log(`from DB: ALL USER`);
//   }
// };

// getUser("Hasan")

//* unknown type
// const discounteCalculator = (input: unknown) => {
//   if (typeof input === "number") {
//     const discountedPrice = input * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === "string") {
//     const [amount] = input.split(" ");
//     console.log(Number(amount) * 0.1);
//   } else {
//     console.log("Wrong input.");
//   }
// };

// discounteCalculator(100);
// discounteCalculator("100 tk");
// discounteCalculator(null);

// * never

// const throwError = (msg: string):never => {
//     throw new Error (msg)
// }

// throwError('Error...')

// ! module 2 (1) Video
// // * type assertion
// const kgToGMConverter = (
//   input: string | number
// ): string | number | undefined => {
//   if (typeof input === "number") {
//     return input * 1000;
//   } else if (typeof input === "string") {
//     const [value] = input.split(" ");
//     return `Converted output is: ${Number(value) * 1000}`;
//   }
// };

// const result1 = kgToGMConverter(3) as number;
// console.log(result1);
// const result2 = kgToGMConverter("2 kg") as string;
// console.log(result2);

// // * Custome error (another video)
// type CustomError = {
//   message: string;
// };

// try {
// } catch (err) {
//   console.log((err as CustomError).message);
// }

//* interface array,object,function er khetre kaj kore

// type User = {
//   name: string;
//   age: number;
// };

// interface IUser {
//   name: string;
//   age: number;
// }

// type Role = {
//   role: "admin" | "user";
// };

// type UserWithRole = User & Role;

// interface IUserWithRole extends IUser {
//   role: "admin" | "user";
// }

// const user1: UserWithRole = {
//   name: "Mezba",
//   age: 22,
//   role: "user",
// };
// const user2: IUserWithRole = {
//   name: "Mezba",
//   age: 22,
//   role: "admin",
// };

// *function interface use

// type Add = (num1: number, num2: number) => number;

// interface IAdd {
//   (num1: number, num2: number): number;
// }

// const add: IAdd = (num1, num2) => num1 + num2;

// type Friends = string[];

// interface IFriends {
//   [index: number]: string;
// }

// const friends: IFriends = ["A", "B", "C", "D"];

// * generic array

// type GenericArray<T> = Array<T>;

// const friends: Array<string> = ["A", "D", "E"];
// const rollNumber: Array<number> = [4, 5, 6, 4];
// const booleantype: Array<boolean> = [true, false, true];

// * Tuple
// type Coordinates<X, Y> = [X, Y];
// const coordinates1: Coordinates<number, number> = [20, 30];
// const coordinates2: Coordinates<string, string> = ["20", "30"];

// *Array of object generic with type alias
// type User = {
//   name: string;
//   age: number;
// };
// type GenericArray<T> = Array<T>;

// const users: GenericArray<User> = [
//   {
//     name: "mr X",
//     age: 22,
//   },
//   {
//     name: "mr U",
//     age: 62,
//   },
// ];

// * Generic with interface
// interface Developer<T, X = null> {
//   name: string;
//   salary: number;
//   device: {
//     brand: string;
//     model: string;
//     releasedYear: string;
//   };
//   smartWatch: T;
//   bike?: X;
// }

// interface BrandCharaWatch {
//   heartRate: string;
//   stopwatch: boolean;
// }

// interface AppleWatch {
//   heartRate: string;
//   callSupport: boolean;
//   calculator: boolean;
//   AiFeature: boolean;
// }
// interface Bike {
//   brand: "Yamaha";
//   engineCapacity: "200cc";
// }

// const poorDeveloper: Developer<BrandCharaWatch, Bike> = {
//   name: "Mr Poor",
//   salary: 20,
//   device: {
//     brand: "lenovo",
//     model: "lf33",
//     releasedYear: "2025",
//   },
//   smartWatch: {
//     heartRate: "200",
//     stopwatch: true,
//   },
// };

// const richDeveloper: Developer<AppleWatch> = {
//   name: "Mr Poor",
//   salary: 100,
//   device: {
//     brand: "hp",
//     model: "lf33",
//     releasedYear: "2030",
//   },
//   smartWatch: {
//     heartRate: "200",
//     callSupport: true,
//     calculator: true,
//     AiFeature: true,
//   },
//   bike: null,
// };

// * generic function
// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObj = (value: { id: number; name: string }) => {
//   return [value];
// };

// const createArrayWithGeneric = <T>(value: T) => {
//   return [value];
// };

// const arrString = createArrayWithGeneric("Apple");
// const arrNum = createArrayWithGeneric(204);
// const arrObj = createArrayWithGeneric({
//   id: 123,
//   name: "azmain fayek",
// });

// * Tuple

// const createArrayWithTuple = (
//   param1: { id: string; name: string },
//   param2: string
// ) => [param1, param2];

// * Generic with Tuple
// const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
//   param1,
//   param2,
// ];

// const res1 = createArrayTupleWithGeneric("Mezba", false);
// const res2 = createArrayTupleWithGeneric(222, {
//   name: "Mezba",
// });

// const addStudentToCourse = <T>(studentInfo: T) => {
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
//   name: "jhankar",
//   hasCar: true,
//   isMarried: true,
// };

// const result = addStudentToCourse(student2);
// console.log(result);

//* Type guard using instance of
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getSleep(numOfHours: number) {
//     console.log(`${this.name} Doinik ${numOfHours} Ghonta Ghumay`);
//   }
// }

// class Student extends Person {
//   constructor(name: string) {
//     super(name);
//   }
//   doStudy(numOfHours: number) {
//     console.log(`${this.name} Doinik ${numOfHours} Ghonta Study Kore`);
//   }
// }

// class Teacher extends Person {
//   constructor(name: string) {
//     super(name);
//   }
//   takeClass(numOfHours: number) {
//     console.log(`${this.name} Doinik ${numOfHours} Ghonta Class Nay`);
//   }
// }

// // function guard
// const isStudent = (user: Person) => {
//   return user instanceof Student;
// };

// const isTeacher = (user: Person) => {
//   return user instanceof Teacher;
// };

// const getUserInfo = (user: Person) => {
//   if (isStudent(user)) {
//     user.doStudy(10);
//   } else if (isTeacher(user)) {
//     user.takeClass(60);
//   } else {
//     user.getSleep(15);
//   }
// };

// const student1 = new Student("Mr Student");
// const teacher1 = new Teacher(" Mr Teacher");

// getUserInfo(teacher1);

//* Access Modifiers
// class Bankaccount {
//   public readonly userId: number;
//   public userName: string;
//   private userBalance: number;
// //   protected userBalance: number;

//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this.userBalance = userBalance;
//   }
//   addBalance(balance: number) {
//     this.userBalance = this.userBalance + balance;
//   }
// }

// const mezbaBhai = new Bankaccount(111, "mezba", 20);
// mezbaBhai.addBalance(100);
// console.log(mezbaBhai);

// * getter and setter function
// class BankAccount {
//   userId: number;
//   userName: string;
//   _userBalance: number;

//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this._userBalance = userBalance;
//   }

//   //   addBalance(balance: number) {
//   //     this._userBalance = this._userBalance + balance;
//   //   }

//   // setter use kora korte chai
//   set addBalance(amount: number) {
//     this._userBalance = this._userBalance + amount;
//   }

//   //   getter use kore get korte chai
//   get getBalance() {
//     return this._userBalance;
//   }
// }

// const mezbaVai = new BankAccount(222, "Mezba", 30);
// mezbaVai.addBalance = 100;
// console.log(mezbaVai);

// *Static

// class Counter {
//   static count: number = 0;

//   static increment() {
//     return (Counter.count = Counter.count + 1);
//   }
//   static decrement() {
//     return (Counter.count = Counter.count - 1);
//   }
// }

// // const instance1 = new Counter();
// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.increment());

// // const instance2 = new Counter()
// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.increment());

// // const instance3 = new Counter()
// console.log(Counter.increment());
// console.log(Counter.increment());
// console.log(Counter.increment());

// *polimorphism bohurupi
// class Person {
//   getSleep() {
//     console.log(`I am a normal person. I sleep for 8 hours`);
//   }
// }
// class Student extends Person {
//   getSleep() {
//     console.log(`I am a student. I sleep for 7 hours`);
//   }
// }
// class NextLevelDeveloper extends Person {
//   getSleep() {
//     console.log(`I am a Next Level Developer. I sleep for 6 hours`);
//   }
// }

// const getSleepingHours = (param: Person) => {
//   param.getSleep();
// };

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new NextLevelDeveloper();

// getSleepingHours(person3);

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   // area = pi*r*r
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// const getArea = (param: Shape) => {
//   console.log(param.getArea());
// };

// const shape1 = new Shape();
// const shape2 = new Circle(10);
// const shape3 = new Rectangle(10, 20);

// getArea(shape3);

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Ractangle extends Shape {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// const getArea = (param: Shape) => {
//   console.log(param.getArea());
// };

// const shape1 = new Shape();
// const shape2 = new Circle(10);
// const shape3 = new Ractangle(10, 20);

// getArea(shape1);

// const poorUser = {
//   name: "PH",
//   organization: "Hero",
//   balance: 0,
//   addBalance(vaue: number) {
//     const totalBalance = this.balance + vaue;
//     return totalBalance;
//   },
// };

// poorUser.addBalance(100000);

// const arr: number[] = [1, 2, 5, 6, 5];

// const aqrArray = arr.map((elem: number) => elem * elem);
// console.log(aqrArray);

// const friends = ["rahim", "karim"];
// const schoolFriends = ["pintu", "cintu", "bulbul"];
// const collegeFriends = ["Mr smart", "Babla", "Hasan"];

// friends.push(...schoolFriends)
// console.log(friends);

// const user = {
//   name: "Mezba",
//   phoneNumber: "017855465",
// };
// const otherInfo = {
//   hobby: "Outing",
//   favouriteColor: "Black",
// };
// console.log(otherInfo, user);
// // otherInfo.hobby = "GhoraGhuri";

// const UserInfo = { ...user, ...otherInfo, hobby2: "Outing new" };
// console.log(UserInfo);

// const sendInvite = (...friends: string[]) => {
//   friends.map((friend: string) => {
//     console.log(`Send invitation to ${friend}`);
//   });
// };

// sendInvite("a", "j", "j", "d", "e");

// const user = {
//   name: "azahar sharker",
//   age: 23,
//   address: {
//     village: "Hyatkha",
//     Upazilla: "Ulipur",
//     Division: "Kurigram",
//   },
//   favouriteColor: "black",
// };

// const { name, address: {Upazilla}, favouriteColor } = user;
// console.log(name,Upazilla, favouriteColor);

// const friends = ["a", "j", "j", "d", "e"];
// const [,,,d,]=friends
// console.log(friends[3]);

// type User = {
//   id: number;
//   name: {
//     firstName: string;
//     middleName?: string;
//     lastName: string;
//   };
//   gender: "male" | "female";
//   contactNo: number;
//   address: {
//     division: string;
//     city: string;
//     village: string;
//   };
// };

// const user1: User = {
//   id: 12345,
//   name: {
//     firstName: "Mr X",
//     lastName: "Mr Y",
//   },
//   gender: "male",
//   contactNo: 171789391,
//   address: {
//     division: "Rangpur",
//     city: "Kurigram",
//     village: "Zugipara",
//   },
// };
// const user2: User = {
//   id: 123457855,
//   name: {
//     firstName: "Mr T",
//     lastName: "Mr L",
//   },
//   gender: "female",
//   contactNo: 17178946546,
//   address: {
//     division: "Dhaka",
//     city: "Ulipur",
//     village: "Kashir khamar",
//   },
// };

// type AddFunc = (num1: number, num2: number) => number;

// const add: AddFunc = (num1, num2) => num1 + num2;

// type UserRole = "admin" | "user";

// const getDashboard = (role: UserRole) => {
//   if (role === "admin") {
//     return "admin dashboard";
//   } else if (role === "user") {
//     return "user dashboard";
//   } else {
//     return "guest dashboard";
//   }
// };

// console.log(getDashboard("user"));

// type Employee = {
//   id: string;
//   name: string;
//   phoneNo: string;
// };

// type Manager = {
//   designation: string;
//   teamSize: number;
// };

// type EmployeeManager = Employee & Manager

// const ChowDhuryShaheb: EmployeeManager ={
//     id: "68746454",
//     name: "Choudhri shaheb",
//     phoneNo:'45664445456',
//     designation: "EmployeeManager",
//     teamSize: 50,

// }

// const biyerJonnoEligible = (age: number) => {
//   // if(age >= 20){
//   //     console.log("Biyer jonno eligible.");
//   // }else{
//   //     console.log("Biyer jonno not eligible");
//   // }
//   const result =
//     age >= 21 ? "Biyer jonno eligible." : "Biyer jonno not eligible";
//   console.log(result);
// };

// biyerJonnoEligible(21);

// const userTheme = undefined;
// const userTheme = null;
// const selectedTheme = userTheme ?? "Lisht theme";
// console.log(selectedTheme);
// // null and undefined er upor vitti kore kak kore.

// const isAuthenticated = '';

// const resultWNullish = isAuthenticated ?? "You are guest!";
// const resultWTer = isAuthenticated ? "isAuthenticatd" : "You are guest.";

// console.log("nullish", resultWNullish, "Ternary", resultWTer);

// const user: {
//   address: {
//     city: string;
//     town: string;
//     postalCode?: string;
//   };
// } = {
//   address: {
//     city: "Banani",
//     town: "Dhaka",
//   },
// };

// const postalCode = user?.address?.postalCode;
// console.log(postalCode);

// *nullable type
// const getUser = (input: string) => {
//   if (input) {
//     console.log(`From DB: ${input}`);
//   } else {
//     console.log("From DB: ALL USER");
//   }
// };

// getUser("Hasan")

// const discountCalculator = (input: unknown) => {
//   if (typeof input === "number") {
//     const discountedPrice = input * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === "string") {
//     const [amount] = input.split(" ");
//     console.log(Number(amount) * 0.1);
//   } else{
    // console.log("Invalid input");    
// }
// };

// discountCalculator(100);
// discountCalculator("100 tk");
// discountCalculator(null);

// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };

// throwError("Error...");
