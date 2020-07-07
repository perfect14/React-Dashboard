import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: '',
      market: '',
      location: '',
      joined: '',
      approve: '',


    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      company: this.state.company,
      market: this.state.market,
      location: this.state.location,
      joined: this.state.joined,
      approve: this.state.approve,



    };
    this.props.addUser(newUser)
    this.setState({
      company: '',
      market: '',
      location: '',
      joined: '',
      approve: '',

    });

  };

  render() {
    return (
      <div className="user_form">






      </div>



    )
  }
}

export default UserForm;