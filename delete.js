/*const { dir } = require('console');
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
//for(i=0;i<5;i++)
//{
 //   fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
//}
fs.readdir(dirPath,(err,files)=>{
files.forEach((item)=>{
    console.log("file name is",item)
})
})*/
const dbConnect=require('./mongodb');
const deleteData= async ()=>{
    let data= await dbConnect();
    let result=await data.deleteOne({name:'m 45'})
    console.warn(result);

}
deleteData();