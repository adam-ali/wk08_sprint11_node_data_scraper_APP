import React from 'react'
import ajax from 'superagent';
import users from './pages/users.jsx'
import user from './pages/user.jsx'
import { Router, Route, Link, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';


var App = React.createClass({
    render: function () {

        return (
            <Router history={hashHistory}>
                <Route path="/user" component={user}/>
                <Route path="/users" component={users}/>
            </Router>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('app'));