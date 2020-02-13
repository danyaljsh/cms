const express = require('express');
const app =express();
const exphbs =require('express-handlebars');
const path =require('path');
const{mongoose} =require('./db/db');
const bodyParser =require('body-parser');

var port =3000;

app.use(express.static(path.join(__dirname,'public')));

//set view engine
app.engine('handlebars',exphbs({defaultLayout:'home'}));
app.set('view engine','handlebars');

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//load routes
const home =require('./routes/home/index');
const admin =require('./routes/admin/index');
const posts =require('./routes/admin/posts');

//use routes
app.use('/',home);
app.use('/admin',admin);
app.use('/admin/posts',posts);


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
