var Course = require('../model/course.js')

exports.getCourse = function(req,res){
	Course.find(function(err, courses) {
		if (err){
			res.send(err);
		}
		else {
			 res.json(courses);
		}

 });

}

exports.postCourse = function(req,res){
	var course = new Course();
	course.name = req.body.name;
	course.description = req.body.description;
	course.code = req.body.code;
	course.type = req.body.type;
	course.lecturers =[];
	course.timetable = [];
	course.students = [];
	course.save(function(err) {
		if (err){
			res.send(err);
		}
		else {
			res.json({ message: 'Course created!' });
		}
			 
		
	});
}

exports.editCourse = function(req,res){

}

exports.deleteCourse = function(req,res){

}

exports.getCourseById = function(req,res){

}