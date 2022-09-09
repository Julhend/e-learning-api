const { Router } = require('express');
const classController = require('../../controllers/classController');
const auth = require('../../middlewares/auth');

const router = Router();

router.post(
  '/',
  auth,
  classController.createNewClass,
);

router.get('/', auth, classController.getCLasses);
router.get('/student', auth, classController.getCLassesStudent);
router.get('/public', classController.getCLassesPublic);

router.patch(
  '/:classId',
  auth,
  classController.updateClass,
);
router.delete(
  '/:classId',
  auth,
  classController.deleteClass,
);

module.exports = router;
