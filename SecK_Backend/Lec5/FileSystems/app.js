const fs = require('fs');
let data = "ain't gonna worry about it"
// fs.writeFile('./abc.txt',data,{
//     encoding: 'utf-8',
//     flag : 'w',
// },(err)=>{
//     if(err) throw 'error';
//     console.log("successful");
// })

fs.writeFileSync('./abc2.txt',data);

fs.readFile('./abc.txt',{
    encoding:'utf-8',
    flag:'r'
},(err,data)=>{
        if(err) throw 'error';
        console.log(data);
})

const getdata = fs.readFileSync('./abc.txt');
console.log(getdata.toString());
console.log(getdata);

