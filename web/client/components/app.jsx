import React from 'react';
import Login from './login';
import Registration from './registration';
import styles from './app.scss'
import {RaisedButton, AutoComplete} from 'material-ui';
import { NavLink, Route, Switch } from 'react-router-dom';



let addressImg = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loginNavStatus: true,
        }
    }

    navigationStatusChange = () => {
        console.log('test',!this.state.loginNavStatus)
        this.setState({
            loginNavStatus: !this.state.loginNavStatus
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.navUp}>
                        <NavLink
                            className={styles.navBar}
                            activeClassName={{background: 'black'}}
                            onClick={this.navigationStatusChange}
                            to="/">Login
                        </NavLink>
                        <NavLink
                            className={styles.navBar}
                            activeClassName={styles.active}
                            onClick={this.navigationStatusChange}                            
                            to="/Registration">Registration
                        </NavLink>
                    </div>
                    <div className={styles.navDown}>
                        <div className={this.state.loginNavStatus ? styles._navActive : styles._navDefault }></div>
                        <div className={this.state.loginNavStatus ? styles._navDefault : styles._navActive}></div>
                    </div>
                </div>
                <div className={styles.loginBoxContainer}>
                    <Switch>
                        <Route path="/Registration" render={() => <Registration />} />
                        <Route path="/" render={() => <Login />} />
                    </Switch>
                </div>
            </div>
                
        )
    }
    
    componentWillUpdate(previusState, newState){
        console.log(newState)
    }
}