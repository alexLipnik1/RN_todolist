const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');

app.listen(3000, function(){
    console.log("Listening on http://localhost:3000");
});