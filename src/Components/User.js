import React, { Component } from 'react';
import jsonData from '../Data/Data.json';
import Navbar from './Navbar.js';
import { Avatar, CardHeader, Divider } from '@material-ui/core/';
import { Alert } from '@material-ui/lab/';
import Footer from './Footer.js';

class User extends Component {
    constructor() {
        super()
        this.state = {
            filterData: []
        }
    }
    handleChange = (e) => {
        console.log(e);
        let myData = jsonData[0].members.filter(data => data.id == e)
        this.setState({ filterData: myData[0] })
    }
    render() {
        console.log(jsonData[0].members);
        console.log(this.state.filterData.real_name)
        return (
            <div className="p-1">
                <Navbar />
                <div className="container mt-5">
                    {jsonData[0].members.map(e => (
                        <div class="card mb-2">
                            <div class="row no-gutters">
                                <div class="col-m-2 ">
                                    <img className="m-5 rounded-circle" src={e.img} width="100" height="100" alt="..." data-placement="right" title={e.real_name} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" className="bg-danger mr-2" data-placement="right" title={e.real_name}>{e.real_name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()}</Avatar>
                                            }
                                            title={e.real_name}
                                            subheader={e.tz}
                                        />
                                        <h5 class="card-title ml-3 font-weight-bolder">{e.real_name}</h5>
                                    </div>
                                    <button type="button" class="btn btn-outline-danger ml-4 mb-2" data-placement="right" title={e.real_name} data-toggle="modal" data-target="#exampleModal" onClick={() => this.handleChange(e.id)}>User Details</button>
                                    <small class="text-muted ml-2">Click for User details</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* modal */}
                {this.state.filterData ?
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <Avatar className="bg-danger" data-placement="right" title={this.state.filterData.real_name}></Avatar>
                                    <h5 class="modal-title ml-2 font-weight-bold" id="exampleModalLabel">{this.state.filterData.real_name}</h5>
                                    <small className="m-2 font-italic text-muted">{this.state.filterData.tz}</small>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-placement="right" title="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.filterData.activity_periods ?
                                        this.state.filterData.activity_periods.map(e => {
                                            return (
                                                <div>
                                                    <p>Start time / End time : {e.start_time} /  {e.end_time}</p><Divider /> 
                                                </div>
                                            )
                                        })
                                        : null}
                                </div>
                                <div class="modal-footer">
                                    <Alert variant="outlined" severity="success" className="mr-5" data-placement="right" title="Updated Sucessfull">
                                        {this.state.filterData.real_name} updated sucess !!
                                    </Alert>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal" data-placement="right" title="Close">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                <Footer />
            </div>
        )
    }
}

export default User
