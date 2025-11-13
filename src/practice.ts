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
