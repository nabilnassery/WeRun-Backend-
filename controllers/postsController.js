const db = require('../models');

// show all posts
const index = (req, res) => {
    db.Post.find({}, (error, foundPosts) => {
        if (error) return res.status(500).send(error);
        console.log({foundPosts})
        // response.sendResponse(res, foundPosts);
        res.send(foundPosts)
    });
    
}

const create = (req, res) => {
    db.Post.create(req.body, (error, createdPost) => {
        if (error) return res.status(500).send(error);
        // console.log({foundPosts})
        createdPost.user = req.session.currentUser.id;
        createdPost.save((error, savedPost) => {
            if (error) return res.status(500).send(error);
            res.send(savedPost);   
        });
        // response.sendResponse(res, foundPosts);
        // res.send(createdPost)
    });
    
}


module.exports = {
  index,
  create
}