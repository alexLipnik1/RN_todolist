import React from 'react';
import styles from './login.scss';
import RaisedButton from 'material-ui/RaisedButton';

let addressImg = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';
// let addressImg = '';
// let addressImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUb15YPNWxjd1jx9uuvduvBeE412ak_t-9sIlOk6kt8_59Ow2TKQ';

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
                        {/* <Button className={styles.btn}>Login</Button> */}
                        <RaisedButton 
                            buttonStyle={{borderRadius: 10}} 
                            overlayStyle={{borderRadius: 10}} 
                            labelStyle={{fontWeight: 'bold'}} 
                            label="Login"
                            // primary={true}
                            className={styles.btn} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;