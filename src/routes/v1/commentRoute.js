const { Router } = require('express');
const commentController = require('../../controllers/commentController');
const auth = require('../../middlewares/auth');

const router = Router();

router.post(
  '/',
  auth,
  commentController.createNewComment,
);

router.get('/', auth, commentController.getComment);

router.patch(
  '/:commentId',
  auth,
  commentController.updateComment,
);
router.delete(
  '/:commentId',
  auth,
  commentController.deleteComment,
);

module.exports = router;
