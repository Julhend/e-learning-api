const { Router } = require('express');
const subjectController = require('../../controllers/subjectController');
const auth = require('../../middlewares/auth');

const router = Router();

router.post(
  '/',
  auth,
  subjectController.createNewSubject,
);

router.get('/', auth, subjectController.getSubject);

router.patch(
  '/:subjectId',
  auth,
  subjectController.updateSubject,
);
router.delete(
  '/:subjectId',
  auth,
  subjectController.deleteSubject,
);

module.exports = router;
