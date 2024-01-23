let arr1 = [10,20,30];
let arr2 = [40,50,60];
// let arr3 = [...arr1, arr2];
let arr3 = [...arr1, ...arr2];
// console.log(arr3);

let obj1 = {
    num1 : 10,
    num2 : 20
}
let obj2 = {
    num3 : 30,
    num4 : 40
}
// obj3 = {obj1, obj2};
let obj3 = {...obj1, ...obj2};
// console.log(obj3);

let arr = ['mango','banana']
const [a,b] = arr;
console.log(a,b);

let objects = {
    num1 : 10,
    num2 : 20
}

// const {num1 , num2} = objects;
const {num1:n1 , num2} = objects;
// console.log(num1,num2);
console.log(n1,num2);