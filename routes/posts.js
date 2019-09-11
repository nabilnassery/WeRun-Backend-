const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

// Current Path
// '/api/v1/posts'

router.get('/', ctrl.posts.index);

router.get('/:id', ctrl.posts.show);

router.post('/', ctrl.posts.create);
// authRequired, 

router.delete('/:id', ctrl.posts.deletePost);
// authRequired, 

router.put('/:id', ctrl.posts.edit);
// authRequired, 

module.exports = router;