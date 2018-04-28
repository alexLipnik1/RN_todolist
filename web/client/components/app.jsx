import React from 'react';
import Login from './login';
// import 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Login />
            </MuiThemeProvider>
        )
    }
}