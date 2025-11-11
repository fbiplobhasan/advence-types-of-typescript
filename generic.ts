// dynamically generalize

type GenericArray<T> = Array<T>

const friends : GenericArray<string> = ['Mr.X', 'Mr. Y','Mr.Z'];

const rollNumbers: GenericArray<number> = [4,7,11];

const isEligibleList: GenericArray<boolean> = [true,false,true]



// const multiply = (value: number) => {
//     return value * value;
// }

// console.log(multiply(2));

type Coordinates<X,Y> = [X,Y];

const coordinates1: Coordinates<string,string> = ['2','8']
const coordinates2: Coordinates<number,number> = [2,4]