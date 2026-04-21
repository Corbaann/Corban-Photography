const array = [1, 2, 3, 4, 5];

// equivalent of doing
// const zerothEle = array[0];
// const firstEle = array[1];
const [zerothEle, firstEle,second] = array;
console.log(second)
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(obj)