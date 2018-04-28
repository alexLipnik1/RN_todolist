const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const user = require('./controllers/user')
const userTasks = require('./controllers/userTasks')

user.init();
userTasks.init();

app.listen(3002, function(){
    console.log("Listening on http://localhost:3002");
});