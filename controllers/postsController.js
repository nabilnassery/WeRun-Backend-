const db = require('../models');

// show all posts
const index = (req, res) => {
    db.Post.find({}, (error, foundPosts) => {
        if (error) return res.status(500).send(error);
        // console.log({foundPosts})
        // response.sendResponse(res, foundPosts);
        res.send(foundPosts)
    }); 
}

// show all posts
const show = (req, res) => {
    // console.log("Show backend");
    db.Post.findOne({}, (error, foundPost) => {
    // db.Post.find({}, null, {}, function (err, docs) {
      console.log("Found results");
      console.log(foundPost);
      res.send(foundPost)
    });
    // res.status(200).json({status: 200, message: 'Success'});
  }

const create = (req, res) => {
    db.Post.create(req.body, (error, createdPost) => {
        if (error) return res.status(500).send(error);
        // console.log({foundPosts})
        // createdPost.user = req.session.currentUser.id;
        createdPost.save((error, savedPost) => {
            if (error) return res.status(500).send(error);
            res.send(savedPost);   
        });
        // response.sendResponse(res, foundPosts);
        // res.send(createdPost)
    });  
}

const deletePost = (req, res) => {
    db.Post.findByIdAndDelete({ _id: req.params.id}, (err, deletedPost) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again...'});
      res.status(200).json({status: 200, message: 'Success'});
    });
};

const edit = (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedPost) => {
    if (err) return res.status(500).json({status: 500, message: 'Something went wrong, please try again...'})
    res.status(202).json({status: 202, data: editedPost});
  });
};


module.exports = {
  index,
  show,
  create,
  deletePost,
  edit
}