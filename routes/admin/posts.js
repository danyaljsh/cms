const express =require('express');
const router =express.Router();

router.all('/*',(req,res,next)=>{

    req.app.locals.layout ='admin';
    next();
});

router.get('/',(req,res)=>{
    
    res.render('admin/post',{
        title:'All post'
    })

});

router.get('/create',(req,res)=>{
    
    res.render('admin/create-post',{
        title:'Create post'
    })
});



module.exports =router;