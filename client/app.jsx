import React from 'react'
import ajax from 'superagent';
import Users from './pages/users.jsx'
import User from './pages/user.jsx'
import { Router, Route, Link, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';


var App = React.createClass({
    render: function () {

        return (
            <Router history={hashHistory}>
                <Route path="/users/:user" component={User}/>
                <Route path="/users" component={Users}/>
            </Router>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('app'));