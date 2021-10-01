const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', { title: 'Programming Crash Courses', content: 'index.ejs' });
});
router.get('/embark', function(req, res, next) {
  res.render('template', { title: 'Programming Crash Courses', content: 'trial.ejs' });
});
router.get('/schedule', function(req, res, next) {
  res.render('template', { title: 'Programming Crash Courses', content: 'schedule.ejs' });
});
router.get('/one-hour', function(req, res, next) {
  res.render('template', { title: 'Programming Crash Courses', content: 'one-hour.ejs' });
});
router.get('/two-hours', function(req, res, next) {
  res.render('template', { title: 'Programming Crash Courses', content: 'two-hours.ejs' });
});

module.exports = router;
