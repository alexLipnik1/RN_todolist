const { mongoose } = require('./index');

let userTasksSchema = new mongoose.Schema({
    user: {userName: String, password: String},
    date: String,
    tasks: [{
        taskName: String,
        importance: Number,
        active: Boolean,
        finished: Boolean,
    }],
})

let UserTasks = mongoose.model('UserTasks', userTasksSchema, '_user_tasks');
module.exports = {
    UserTasks
}