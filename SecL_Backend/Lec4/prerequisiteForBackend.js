let fruits = ['mango','apple'];

const [a,b] = fruits;
console.log(a,b);

let obj = {
    name1 : 'depak',
    name2 : 'harshit'
}

// const {name1,name2} = obj;
const {name1:n1,name2} = obj;
console.log(n1,name2);