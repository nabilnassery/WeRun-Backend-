const db = require('../models');

// show all messages
const index = (req, res) => {
    db.Message.find({}, (error, foundMessages) => {
        if (error) return res.status(500).send(error);
        console.log({foundMessages})
        // response.sendResponse(res, foundPosts);
        res.send(foundMessages)
    });   
}

const create = (req, res) => {
    db.Message.create(req.body, (error, createdMessage) => {
        if (error) return res.status(500).send(error);
        // console.log({foundPosts})
        createdMessage.user = req.session.currentUser.id;
        createdMessage.save((error, savedMessage) => {
            if (error) return res.status(500).send(error);
            res.send(savedMessage);   
        });
        // response.sendResponse(res, foundPosts);
        // res.send(createdPost)
    });  
}

const edit = (req, res) => {
    // db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedPost) => {
    db.Message.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedMessage) => {
      if (err) return res.status(500).json({status: 500, message: 'Something went wrong, please try again...'})
      res.status(202).json({status: 202, data: editedMessage});
    });
  };

const deleteMessage = (req, res) => {
    // db.Post.findByIdAndDelete(req.params.id, (err, deletedMessage) => {
        db.Message.findByIdAndDelete(req.params.id, (err, deletedMessage) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again...'});
      res.status(200).json({status: 200, message: 'Success'});
    });
};

module.exports = {
    index,
    create,
    deleteMessage,
    edit
  }