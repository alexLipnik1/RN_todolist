
const {User} = require('./../models/user');
const {app} = require('./index');

let init = () => {
    app.post('/user', function(req, response){
        try {
            let user = new User({userName: 'avi', password: '32233'});
            user.save().then((newDoc) => {
                response.status(201).send(newDoc);
                }, (e) => {
                response.status(400).send(e);
                });
        }
        catch (e) {
            response.status(500);
            response.send("error");
        };
    })

    app.put("/put/:userName/:password", function (request, response) {
        User.findOne({
            "userName": request.params.userName,
            "password": request.params.password
        }, function (err, x) {
            if (x) {
                x.password = request.body.password || x.password;
                x.lastName = request.body.lastName || x.lastName;
                x.firstName = request.body.firstName || x.firstName;
                x.save();

                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });

    app.get('/get', function(req, res){
        User.findOne({userName: 'avi'}, function(err, x){
            if(err)console.log(err)
            else console.log(x)
        })
    })
}


module.exports = {
    init
}