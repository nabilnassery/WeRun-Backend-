const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Current Path
// '/api/v1/posts/:id/messages'

router.get('/', authRequired, ctrl.messages.index);
// router.get('/', ctrl.posts.index);

router.post('/', authRequired, ctrl.messages.create);
// router.post('/', authRequired, ctrl.posts.create);

router.delete('/:id', authRequired, ctrl.messages.deleteMessage);
// router.delete('/:id', authRequired, ctrl.posts.deletePost);

router.put('/:id', authRequired, ctrl.messages.edit);

module.exports = router;