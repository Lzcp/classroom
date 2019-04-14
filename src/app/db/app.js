var Student = require("./Student.js");

Student.create({"name":"小红","age":13,"sex":"女"},function(error){
   console.log("保存成功");
})