const express =require('express');
const router =express.Router();
const {Post} =require('../../models/Post');
router.all('/*',(req,res,next)=>{

    req.app.locals.layout ='admin';
    next();
});

router.get('/',(req,res)=>{
    
    res.render('admin/posts/posts',{
        title:'All post'
    })

});

router.get('/create',(req,res)=>{  
    res.render('admin/posts/create-post',{
        title:'Create post'
    })
});

router.post('/create',(req,res)=>{
    
    let allowComments = true;
    if(req.body.allowComments){
        allowComments =true;
    }else{
        allowComments =false;
    }

   const newPost =new Post({
        title:req.body.title,
        status:req.body.status,
        allowComments, 
        body:req.body.body
    })

    newPost.save().then(savePost=>{    
        res.redirect('/admin/posts');
    }).catch(error=>{
        console.log('could not right data');
        res.status(400).send({error});
    });
});



module.exports =router;