const fs = require('fs')

let data = "Yeh Mera India"
fs.writeFile('./abx.txt',data,{
  encoding:'utf-8',
  flag:'w'   
},(err)=>{
    if(err) throw err;
    console.log("Write successful");
})

fs.writeFileSync('./abx.txt',data);

// fs.readFile('./abx.txt',{
//     encoding:'utf-8',
//     flag:'r'
// },(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

let readed = fs.readFileSync('./abx.txt');
console.log(readed.toString());

fs.appendFile('abx.txt'," Watan mera India"
,(err)=>{
    if(err) throw err;
    console.log("Append successful");
})

fs.unlink('abx.txt', (err) => {
    if (err) throw err;
    console.log('abx.txt was deleted');
  });
