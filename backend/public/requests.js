const user = {userName: 'alex1', password: '11111'}
const test = {
    "user": {
      "userName": "alex1",
        "password": "11111"
    },
    "date": "12-4-2018",
    "tasks": [
      {
        "taskName": "task",
      "importance": 1,
      "active": false,
      "finished": false
    },
          {
        "taskName": "task",
      "importance": 1,
      "active": false,
      "finished": false
    },
          {
        "taskName": "task",
      "importan24442ce": 1,
      "active": false,
      "finished": false
    },
          {
        "taskName": "task",
      "importance": 1,
      "active": false,
      "finished": false
    },
          {
        "taskName": "task",
      "imporance": 1,
      "active": false,
      "finished": false
    }
    ]
  }


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log('success')
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
}

function checkUser(){
    fetch(`./api/checkUser/${user.userName}/${user.password}`)
        .then(res => checkStatus(res));
}    

        
function addUser(){
    fetch('./api/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(res => res.json())
    .catch(err => console.log('ERROR:', err))
    .then(res => console.log('success:', res))
} 

function addUserTasks(){
    fetch('./api/userDailyTask', {
        method: 'POST',
        body: JSON.stringify(test),
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(res => res.json())
    .catch(err => console.log('ERROR:', err))
    .then(res => console.log('success:', res))
} 