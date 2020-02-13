const mongoose =require('mongoose');

mongoose.Promise =global.Promise;

mongoose.connect('mongodb://localhost:27017/cms',{useNewUrlParser:true , useUnifiedTopology:true}).then( db=>{
    console.log('mongo connected');
}).catch(error => console.log(`could not connect : ${error}`));



module.exports ={
    mongoose
}