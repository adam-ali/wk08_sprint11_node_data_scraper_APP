import React from 'react';
import ajax from 'superagent';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

var User = React.createClass({

    getInitialState: function(){
        return{
            user:[]
        };
    },
    componentWillMount: function(){
        ajax
            .get('http://localhost:3001/api/users/'+ this.props.params.user)
            .end((err, res) => {
                if (err || !res.ok) {
                    console.log('Oh no! error' + err);
                } else {
                    this.setState({
                        user: res.body
                    })
                }


            });
    },
    render: function() {
        return (
            <div className="text-center">
                <h1 className="title ">User</h1>
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

                            <tr className="active" >
                                <td className="active tableItems">{this.state.user.position}</td>
                                <td className="active tableItems">{this.state.user.user}</td>
                                <td className="active tableItems">{this.state.user.honor}</td>
                                <td className="active tableItems">{this.state.user.rank}</td>
                                <td className="active tableItems">
                                    <Link to={this.state.user.profileUrl}>{this.state.user.profileUrl}</Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});
module.exports= User;