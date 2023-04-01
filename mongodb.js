/*const express=require('express');
const path=require('path');

const app=express();
app.get('',(req,res)=>{
res.send("<h1>Hello this is home page<h1>");
});
app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="User name" />
    <button>Click Me</button>`)
    });
    app.get('/help',(req,res)=>{
        res.send({
            name:'anil',
            email:'anil003'
        });
      
        });
   */
   /*const publicPath=path.join(__dirname,'public');
//app.use(express.static(publicPath));
app.set('view engine','ejs');//set up of template engine
app.get('',(__,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)

})
app.get('/profile',(__,resp)=>{
    const user={
        name:'anshu',
        email:'anshu009',
        city:'lko'
    }
    resp.render('profile',{user});

})
app.get('/login',(_,resp)=>{
    resp.render('login');
})
app.listen(4500);*/
const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='e-comm'
const client=new MongoClient(url);

async function dbConnect()
{
    let result= await client.connect();
     db=result.db(database);
    return db.collection('products');
    //let data=await collection.find({name:'m 40'}).toArray();
   // console.log(data);
}
module.exports=dbConnect;