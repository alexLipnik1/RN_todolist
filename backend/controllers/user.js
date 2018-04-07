
const {User} = require('./../models/user');
const {app} = require('./index');

let init = () => {
    app.post('/api/user', function(req, response){
        try {
            let user = new User(req.body);
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

    app.get("/api/checkUser/:userName/:password", function (request, response) {
        console.log('check')
        User.findOne({
            "userName": request.params.userName,
            "password": request.params.password
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

    app.get('/get', function(req, res){
        User.findOne({userName: 'avial'}, function(err, x){
            if(err)console.log(err)
            else console.log(x)
        })
    })
}


module.exports = {
    init
}