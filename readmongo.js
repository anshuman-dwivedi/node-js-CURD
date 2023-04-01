/*const http=require('http');
const data=require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(4200);*/

//dbConnect().then((resp)=>{
//resp.find({name:'m 40'}).toArray().then((data)=>{
//console.warn(data)
//})
//})
const dbConnect=require('./mongodb');
const main = async()=>{
    let data= await dbConnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();
//console.warn(dbConnect());