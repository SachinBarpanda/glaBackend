let obj1 = {
    num1 : 10,
    num2 : 20
}
let obj2 = {
    num3 : 30,
    num4 : 40
}

let obj3 = {...obj1,...obj2};
// console.log(obj3);

let arr = ['mango','banana'];
const [a,b] = arr;
console.log(a);
console.log(b);

let obj = {
    num1 : 10,
    num2 : 20
}

// const {num1,num2} = obj;
const {num1:x,num2} = obj;
// console.log(num1);
console.log(x);

