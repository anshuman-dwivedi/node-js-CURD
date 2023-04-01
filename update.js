/*const fs=require('fs');
const input=process.argv;
if(input[2]=='add')
{
fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')
{
fs.unlinkSync(input[3]);
}
else{
    
    console.log('Invalid Input');
}*/
const dbConnect=require('./mongodb')
const updateData= async ()=>{
    let data =await dbConnect();
    let result=data.updateOne({
       name:'m 40'},{
        $set:{name:'m 45'}
       }
    );
    console.warn(data);
}
updateData();