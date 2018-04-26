import React from 'react';
import styles from './login.scss';

let Login = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.loginBoxContainer}>
                <div className={styles.title}>Login</div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.label}>User Name:</div>
                            <input tipe="text" id="userName" />
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.label}>Password:</div>
                            <input tipe="text" id="password" /> 
                        </div>
                    </div>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}


export default Login;