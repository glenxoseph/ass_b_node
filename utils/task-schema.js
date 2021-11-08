//lets require joi

const Joi = require('joi');

//lets create the joi object 

var taskSchema = Joi.object({ 
    name: Joi.string().min(3),
    completed: Joi.boolean()
});

//lets export it 

module.exports.taskSchema = taskSchema;