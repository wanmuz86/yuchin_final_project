var express = require('express');
var app = express();


var mongoose = require('mongoose');

mongoose.connect('mongodb://wanmuz:abcd1234@ds143744.mlab.com:43744/yuchinproject')

var bodyParser = require('body-parser');

var router = express.Router(); 
var courseController = require('./controllers/course.js')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

router.route('/courses')
.post(courseController.postCourse)
.get(courseController.getCourse)

router.get('/', function(req, res) {
 res.json({ message: 'hooray! welcome to our api!' });
});


app.use('/api', router);

app.listen(process.env.PORT || 8080);