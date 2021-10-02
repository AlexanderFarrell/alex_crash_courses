const express = require('express');
const router = express.Router();

function add_page(router, path, page_title, page_content){
  router.get(path, (req, res) => {
    res.render('template', { title: page_title + " - Alexander Farrell", content: page_content})
  })
}

add_page(router, '/', 'Home', 'index.ejs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('template', { title: 'Programming Crash Courses', content: 'index.ejs' });
// });
// router.get('/embark', function(req, res, next) {
//   res.render('template', { title: 'Programming Crash Courses', content: 'trial.ejs' });
// });
// router.get('/schedule', function(req, res, next) {
//   res.render('template', { title: 'Programming Crash Courses', content: 'schedule.ejs' });
// });
// router.get('/one-hour', function(req, res, next) {
//   res.render('template', { title: 'Programming Crash Courses', content: 'one-hour.ejs' });
// });
// router.get('/two-hours', function(req, res, next) {
//   res.render('template', { title: 'Programming Crash Courses', content: 'two-hours.ejs' });
// });

module.exports = router;
