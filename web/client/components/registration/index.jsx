import React from 'react';
import styles from './registration.scss';
import {RaisedButton, AutoComplete} from 'material-ui';

let addressImg = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log('success!')
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

let handleLoginPress = () => {
    let user = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value
    }
    fetch('http://localhost:3002/api/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json'
            })
    }).then(res => res.json())
    .catch(err => console.log('ERROR:', err))
    .then(res => console.log('success:', res))

}

let Registration = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.loginBoxContainer}>
                <div className={styles.title}>Registration</div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <img className={styles.img} src={addressImg} />
                        <div className={styles.inputContainer}>
                            <div className={styles.label}>User Name:</div>
                            <input tipe="text" id="userName" />
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.label}>Password:</div>
                            <input tipe="text" id="password" /> 
                        </div>
                        <div>
                            <RaisedButton 
                                labelStyle={{fontWeight: 'bold'}} 
                                label="Sign up"
                                className={styles.btn1}
                                onClick={handleLoginPress}
                                /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Registration;