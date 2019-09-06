const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Current Path
// '/api/v1/posts'

router.get('/', ctrl.posts.index);

router.post('/', authRequired, ctrl.posts.create);

module.exports = router;