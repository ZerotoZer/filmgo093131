const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController')
const {isAuth, isAdmin} = require("../helpers/helper");
router.get('/', isAdmin, profileController.profile_to_admin_panel)
router.get('/', isAuth, profileController.profile_the_user);
router.get('/', profileController.profile_to_login);
router.get('/:id', profileController.profile_id);
router.delete('/:id', profileController.profile_delete);


module.exports = router;