let arr1 = [1,2,3]
let arr2 = [4,5,6]

// let arr3 = [arr1,arr2];
let arr3 = [...arr1,...arr2];
// console.log(arr3);

let obj1 = {
    num1 : 10,
    num2 : 20
}
let obj2 = {
    num3 : 30,
    num4 : 40
}

// let obj3 = {obj1, obj2};
let obj3 = {...obj1, ...obj2};
// console.log(obj3);

let sum = (a,b,...c)=>{
    let val = 0;
    for(let i = 0; i < c.length; i++){
        val += c[i];
    }
    console.log(a+b+val);
}

// sum(1,2,3,4,5);

// destructure
let ourArr = [10,20,30];
const [a,b,c] = ourArr;
console.log(a);

let obj = {
    num1 : 10,
    num2 : 20
}
const {num1:n1,num2} = obj;
// console.log(num1,num2);
console.log(n1);


















