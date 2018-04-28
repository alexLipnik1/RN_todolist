import React from 'react';
import styles from './login.scss';
import RaisedButton from 'material-ui/RaisedButton';

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
    let user = {userName: 'alex1', password: '11111'}
    fetch(`http://localhost:3002/api/checkUser/${user.userName}/${user.password}`)
        .then(res => checkStatus(res));
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
                        <RaisedButton 
                            labelStyle={{fontWeight: 'bold'}} 
                            label="Login"
                            className={styles.btn}
                            onClick={handleLoginPress}
                            /> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;