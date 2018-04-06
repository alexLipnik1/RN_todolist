const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const user = require('./controllers/user')

user.init();

app.listen(3000, function(){
    console.log("Listening on http://localhost:3000");
});