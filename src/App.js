import React, {useState} from 'react';
import './index.css';
import './styles/my-theme.css';
import './fonts/Tajawal-Regular.ttf';
import './index';
import './App.css';
import './styles/layout.scss';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import UserMenu from './components/menu/UserMenu';
import {useHistory} from "react-router-dom";


function App() {
    let history = useHistory();
    const requireAuth = () => {
        if(!sessionStorage.getItem('token')) {
            console.log("not in local storage");
            return (<Login/> )
        }
    };

    return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={UserMenu}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
