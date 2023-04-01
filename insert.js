/*const data=[{name:'Anshuman Dwivedi',email:'anshu009@test.com'},
{name:'Anshul ',email:'anshu003@test.com'},
{name:'Ansh Singh',email:'anshu005@test.com'}
]
module.exports=data;*/
const dbConnect=require('./mongodb');

const insert=async ()=>{
    const data=await dbConnect();
 const result=await data.insertOne( {
name:'note 5',brand:'vivo',price:320,category:'mobile'}
)
}
insert();