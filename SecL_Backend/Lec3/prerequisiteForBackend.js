let arr1 = [10,20,30];
let arr2 = [40,50,60];

// let arr3 = [...arr1,arr2];
let arr3 = [...arr1,...arr2];
console.log(arr3);

let obj1 = {
    num1 : 10,
    num2 : 20
}
let obj2 = {
    num3 : 30,
    num4 : 40
}

let obj3 = {...obj1,...obj2}
console.log(obj3);
function ajay(a1,a2,...a3){    
    // console.log(a3);
    let sum = 0 ;
    a3.forEach((val)=>{
        sum+=val;
    })
    console.log(a1+a2+sum);
}
ajay(10,20,30,40,50);


