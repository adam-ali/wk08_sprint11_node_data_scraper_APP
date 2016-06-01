var React = require('react');
import ajax from 'superagent';
import ReactDOM from 'react-dom';
import { Router, Route, Link,  } from 'react-router'


var users = React.createClass({
    getInitialState: function(){
        return{
            users:[]
        };
    },
    componentWillMount: function(){
        ajax
            .get('http://localhost:3001/api/users')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Oh no! error' + err);
                } else {
                    this.setState({
                        users: res.body
                    })
                }


            });
    },
    render: function() {
        return (
            <div className="text-center">
                <h1 className="title ">LeaderBoard</h1>

                <div className='container-fluid' >
                    <table className="table table-hover">
                        <tbody>
                        <tr className="active">
                            <td className="success header">Position</td>
                            <td className="success header">UserName</td>
                            <td className="success header">Honor</td>
                            <td className="success header">Rank</td>
                            <td className="success header">Profile URL</td>

                        </tr>
                        {this.state.users.map((user, index) => {
                            return (
                                <tr className="active" key={index}>
                                    <td className="active tableItems">{user.position}</td>
                                    <td className="active tableItems">{user.user}</td>
                                    <td className="active tableItems">{user.honor}</td>
                                    <td className="active tableItems">{user.rank}</td>
                                    <td className="active tableItems">{user.profileUrl}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});
module.exports= users;