const {User} = require('./../models/user');
const {UserTasks} = require('./../models/userTasks');
const {app} = require('./index');

let init = () => {
    app.post('/api/userDailyTask', function(req, response){
        try {
            const data = new UserTasks(req.body);
            const user = new User(req.body.user)
            console.log('test')
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
}


module.exports = {
    init
}