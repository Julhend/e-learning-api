const express = require('express');
const authRoute = require('./authRoute');
const profileRoute = require('./profileRoute');
const curriculumRoute = require('./curriculumRoute');
const gradeRoute = require('./gradeRoute');
const classRoute = require('./classRoute');
const subjectRoute = require('./subjectRoute');
const contentRoute = require('./contentRoute');
const commentRoute = require('./commentRoute');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/curriculum',
    route: curriculumRoute,
  },

  {
    path: '/grade',
    route: gradeRoute,
  },
  {
    path: '/class',
    route: classRoute,
  },
  {
    path: '/subject',
    route: subjectRoute,
  },
  {
    path: '/content',
    route: contentRoute,
  },
  {
    path: '/comment',
    route: commentRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
