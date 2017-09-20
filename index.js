var express = require('express');

var app = express();

var auth = require('./controllers/auth.js')();

var mongoose = require('mongoose');

mongoose.connect('mongodb://wanmuz:abcd1234@ds143744.mlab.com:43744/yuchinproject')

var bodyParser = require('body-parser');

var router = express.Router(); 
var courseController = require('./controllers/course.js')
var userController = require('./controllers/user.js')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(auth.initialize());


router.route('/courses')
.post(courseController.postCourse)
.get(auth.authenticate(), courseController.getCourse)

router.route('/courses/:course_id')
.get(courseController.getCourseById)

router.route('/courses/:course_id/timetables')
.post(courseController.createTimetable)


router.route('/login')
.post(userController.getUserToken)

router.get('/', function(req, res) {
 res.json({ message: 'hooray! welcome to our api!' });
});




app.use('/api', router);

app.listen(process.env.PORT || 8080);