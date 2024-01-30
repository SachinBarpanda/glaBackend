const { throws } = require('assert');
const fs = require('fs')

const data = "Desh Rangella Rangeela";

// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag:'w'
// },(err)=>{
//     if(err) throw err;
//     console.log("Sucessful");
// })
fs.writeFileSync('abc.txt',data);

fs.readFile('abc.txt',{
    encoding:'utf-8',
        flag:'r'
},(err,data)=>{
    if(err) throw err;
        console.log(data);
})
let data1 = fs.readFileSync('abc.txt')
console.log(data1.toString());