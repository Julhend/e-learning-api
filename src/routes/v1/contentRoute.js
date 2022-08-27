const { Router } = require('express');
const contentController = require('../../controllers/contentController');
const { upload } = require('../../controllers/fileController');
const auth = require('../../middlewares/auth');

const router = Router();

router.post(
  '/',
  auth,
  upload.single('file'),
  contentController.createNewContent,
);

router.get('/', auth, contentController.getContent);

router.patch(
  '/:contentId',
  auth,
  contentController.updateContent,
);
router.delete(
  '/:contentId',
  auth,
  contentController.deleteContent,
);

module.exports = router;
