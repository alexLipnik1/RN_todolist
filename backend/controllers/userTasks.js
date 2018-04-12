const {User} = require('./../models/user');
const {UserTasks} = require('./../models/userTasks');
const {app} = require('./index');

let init = () => {
    app.post('/api/userDailyTask', function(req, response){
        try {
            const data = new UserTasks(req.body);
            const user = new User(req.body.user)
            User.findOne({
                "userName": user.userName,
                "password": user.password
            }, function (err, x) {
                if (x) {
                    data.save().then((newDoc) => {
                        response.status(201).send(newDoc);
                        }, (e) => {
                        response.status(400).send(e);
                        });
                }
                else {
                    response.status(500);
                    response.send("Did not success");
                }
            });
        }
        catch (e) {
            response.status(500);
            response.send("error");
        };
    })

    app.get("/api/getUserTasks/:userName/:password/:date", function (request, response) {
        console.log(request.param.date)
        console.log('get')
        UserTasks.findOne({
            "user":{
                "userName": request.params.userName,
                "password": request.params.password,
            },
            "date" : request.params.date
        }, function (err, x) {
            if (x) {
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
}


module.exports = {
    init
}