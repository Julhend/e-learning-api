const express = require('express');
const profileController = require('../../controllers/profileController');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/', auth, profileController.currentProfile);
router.patch('/:userId', profileController.updateProfile);
router.get('/:email', auth, profileController.userByEmail);

module.exports = router;
