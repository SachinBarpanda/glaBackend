const fs =  require('fs')

const data = "ain't gonna worry bout it"
// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag: 'w'
// },(err)=>{
//     if(err) throw "error";
//     console.log("successful"); 
// })

fs.writeFileSync('./abc1.txt',data);

// fs.readFile('abc.txt',{
//     encoding:'utf-8',
//     flag: 'r'
// },(err,data)=>{
//     if(err) throw "error";
//     console.log(data); 
// })

// const str = fs.readFileSync('./abc.txt');
// console.log(str.toString());

// fs.appendFile('./abc.txt','shivangi phone chala rahi hai ',(err)=>{
//         if(err) throw 'error';
//         console.log("Successful");
// })

fs.unlink('./abc.txt',(err)=>{
        if(err) throw 'error';
        console.log("Successfully deleted");
})
