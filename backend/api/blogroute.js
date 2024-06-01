const { Router } = require("express");

const blogApp = Router();

blogApp.use((req, res, next) => {
    blogs = req.app.get("blogs");
    next();
});

blogApp.get('/allblogs', async (req, res) => {
    const data = await blogs.find().toArray();
    res.send(data);
});


blogApp.get('/:id', async (req, res) => {

        const blog = await blogs.findOne({_id:req.params.id});
        console.log(req.params.id)
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.json(blog);
    } 
);





module.exports = blogApp;
