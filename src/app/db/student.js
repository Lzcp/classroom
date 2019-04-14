var mongoose = require('mongoose');
var db = require("./db.js");
var studentSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number},
    sex      :  {type : String}
});
studentSchema.statics.find = function(name, callback) {
    this.model('Student').find({name: name}, callback);
};
//创建修改的静态方法
studentSchema.statics.updata = function(conditions,update,options,callback){
    this.model("Student").update(conditions, update, options, callback);
}
var studentModel = db.model('Student', studentSchema);
//向外暴露
module.exports = studentModel;