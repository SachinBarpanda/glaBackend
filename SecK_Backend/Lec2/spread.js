// let arr1 = [10,20,30];
// let arr2 = [40 , 50 ,60];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// let obj1 = {
//     num1 : 10,
//     num2 : 20
// }
// let obj2 = {
//     num3 : 30,
//     num4 : 40
// }
// let obj3 = {...obj1,...obj2};
// console.log(obj3);

function varArg(num1 , num2 , ...num3){
    let sum = 0;
    num3.forEach((item)=>{
        sum+=item;
    })
    console.log(num1+num2+sum);
}


varArg(10,20,30,40,50);

