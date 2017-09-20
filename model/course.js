var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema ({
	startTime: String,
	endTime: String,
	day: String,
	room : String
}	);
var CourseSchema = new Schema({
 name: String,
 description: String,
 code: String,
 type: String,
 lecturers: [String],
 students: [String],
 timetable: [ScheduleSchema],
 createdAt : {type: Date, default: Date.now}
});
module.exports = mongoose.model('Course', CourseSchema);