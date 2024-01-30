let fs = require('fs');

const data = "GTA 6 Doraemon will pokemon , Contra Is One Piece"
// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag: 'w'
// },(err)=>{
//     if(err) throw err;
//     console.log("Successful written");
// })

// fs.writeFileSync('abc.txt',data);
fs.readFile('abc.txt',{
    encoding:'utf-8',
    flag: 'r'
},(err,data)=>{
    if(err) throw err;
    // console.log(data);
})
const data1 = fs.readFileSync('abc.txt');
console.log(data1.toString());

fs.appendFile('abc.txt'," Data direct",(err)=>{
        if(err) throw err;
        console.log("Successfully updated");
})

fs.unlink('abc.txt',(err)=>{
        if(err) throw err;
        console.log("Successful deleted");
})

