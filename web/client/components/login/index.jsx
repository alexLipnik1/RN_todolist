import React from 'react';
import styles from './login.scss';
import {RaisedButton, AutoComplete} from 'material-ui';
// import { NavLink, Route, Switch } from 'react-router-dom';

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
    fetch(`http://localhost:3002/api/checkUser/${user.userName}/${user.password}`)
        .then(res => checkStatus(res));
}

let handleSignupPress = () => {

}

let Login = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.loginBoxContainer}>
                <div className={styles.title}>Login</div>
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
                                label="Login"
                                className={styles.btn2}
                                onClick={handleLoginPress}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;