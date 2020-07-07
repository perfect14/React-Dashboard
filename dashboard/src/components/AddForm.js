import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/UserAction'

class AddForm extends Component {
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

    this.props.history.push('/');

  };

  render() {
    return (
      <div className="user_form">





        <form className='user_form2' onSubmit={this.handleSubmit}>
          <h5>Add Startup</h5> <hr />

          <div class="md-form">

            <input type="text" id="inputIconEx2" class="form-control" name="company" value={this.state.company} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'>Company</label>
          </div>


          <div class="md-form">

            <input type="text" id="inputIconEx2" class="form-control" name="market" value={this.state.market} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'>Market</label>
          </div>


          <div class="md-form">

            <input type="text" id="inputIconEx2" class="form-control" name="location" value={this.state.location} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'>Location </label>
          </div>


          <div class="md-form">

            <input type="text" id="inputIconEx2" class="form-control" name="joined" value={this.state.joined} className="name" onChange={this.handleChange} />
            <label htmlFor="inputIconEx2" className='form_label'>Joined</label>
          </div>





          <button className="btn blue-gradient btn-sm">Add</button>

        </form>
      </div>



    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  addUser: addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);