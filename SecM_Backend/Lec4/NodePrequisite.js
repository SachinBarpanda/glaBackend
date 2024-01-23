let arr1 = [10,20,30]
let arr2 = [40,50,60]

// let arr3 = [arr1,arr2];
let arr3 = [...arr1,...arr2];
// console.log(arr3);

function sum(a,b,...c){
    console.log(a+b);
    console.log(c);
    let sum =0 ;
    c.forEach(function(item){
        sum+=item;
    })
    console.log(sum);
}
// sum(3,4,5,6,7,8,9)
// console.log(sum());
let obj1 = {
    num1 : 10,
    num2 : 20
}

console.log({...obj1});

