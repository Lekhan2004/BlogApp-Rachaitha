const {Router} = require('express')

const userApp = Router()

userApp.use((req,res,next)=>{
    blogs=req.app.get('blogs')
    next();
});

userApp.post('/createblog', async (req, res) => {
    // console.log(req.body)
    const newBlog = req.body;
    const result = await blogs.insertOne(newBlog);
    res.send(result);
});


module.exports = userApp