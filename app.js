const express = require('express');
const app =express();
const exphbs =require('express-handlebars');
const path =require('path');
const mongoose =require('mongoose');

var port =3000;


mongoose.connect('mongodb://localhost:27017/cms',{useNewUrlParser:true}).then( db=>{
    console.log('mongo connected');
}).catch(error => console.log(`could not connect : ${error}`));

app.use(express.static(path.join(__dirname,'public')));

app.engine('handlebars',exphbs({defaultLayout:'home'}));
app.set('view engine','handlebars');

const home =require('./routes/home/index');
const admin =require('./routes/admin/index');
const posts =require('./routes/admin/posts');

app.use('/',home);
app.use('/admin',admin);
app.use('/admin/posts',posts);


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
