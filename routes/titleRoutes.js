const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController')
const {isAuth} = require('../helpers/helper');

router.get('/:id', titleController.title_details);
router.get('/:id/addWatchLater', isAuth, titleController.title_add_watch_later);
router.get('/:id/rate/:rating', isAuth, titleController.rate);
router.post('/comment/:id',isAuth,titleController.title_add_comment);
router.post('/:id/reply/:id2',isAuth,titleController.title_reply_to_comment);


module.exports = router;