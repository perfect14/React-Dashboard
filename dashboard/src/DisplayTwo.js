import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./store/UserAction";
import "./App.css";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import { Link } from "react-router-dom";

class DisplayTwo extends Component {
  AddNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    return (
      <div className="parent">
        <div className="sidenav">
          <UserForm addUser={this.AddNewUser} />
        </div>

        <div className="main">
          <div>
            <nav className="nav">
              <i className="fab fa-whmcs"></i> Dashboard
              <span className="add">
                <Link to={`/add/${this.AddNewUser}`}>
                Add Startup <i className="fas fa-caret-down"></i>

                </Link>
                
              </span>
            </nav>

            <div className="banner">Dashboard</div>

            <div className="flex">
              <div className="dashboard">
                <div className="dash">
                  <i className="fab fa-whmcs"></i> Dashboard
                </div>
                <div className="add-startup">
                  <Link to={`/add/${this.AddNewUser}`}>
                    {" "}
                    <i className="fas fa-plus"></i> Add startup{" "}
                  </Link>
                </div>
                <div className="details">
                  <i className="far fa-list-alt"></i> Startup Details
                </div>
              </div>
              <div className="startups">
                <div className="all">All Startups</div>
                <div className="container">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Filter Startups"
                  />
                  <div className="row row-line">
                    <div className="col-md-3"> Company</div>
                    <div className="col-md-2">Market/Industry</div>
                    <div className="col-md-2">Location</div>
                    <div className="col-md-2">Joined</div>
                    <div className="col-md-1">Approve</div>
                    <div className="col-md-2">Action</div>
                  </div>

                  <div className="container new_user_info">
                    {this.props.users.map((field, index) => {
                      return (
                        <span className="">
                          <UserInfo
                            key={field.id}
                            id={field.id}
                            company={field.company}
                            market={field.market}
                            location={field.location}
                            joined={field.joined}
                            approve={field.approve}
                            removeUser={this.deleteUser}
                          />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTwo);