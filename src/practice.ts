// // noramal function
// function addNormal(num1: number, num2: number): number {
//   return num1 + num2;
// }

// addNormal(2, 6);

// //arrow function
// const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(2, 3);

// // object er vitore function
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

// // array er mlddhe push kora spead er maddhome
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
