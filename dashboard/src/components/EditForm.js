import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../store/UserAction'

class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: props.user.company,
      market: props.user.market,
      location: props.user.location,
      joined: props.user.joined,
      approve: props.user.approve

    };

    this.id = props.match.params.id
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      company: this.state.company,
      market: this.state.market,
      location: this.state.location,
      joined: this.state.joined,
      approve: this.state.approve,

    };
    this.props.editUser(this.id, updatedInfo)
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
      <div className="">
        <p className=""></p>
        <form className='user_form2' onSubmit={this.handleSubmit}>
          <h5>Edit Contact</h5> <hr />

          <div class="md-form">
            <i class="fas fa-user-circle prefix cyan-text"></i>
            <input type="text" id="inputIconEx2" class="form-control" name="company" value={this.state.company} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'></label>
          </div>


          <div class="md-form">
            <i class="far fa-address-card fa-2x prefix cyan-text"></i>
            <input type="text" id="inputIconEx2" class="form-control" name="market" value={this.state.market} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'></label>
          </div>


          <div class="md-form">
            <i class="far fa-envelope fa-2x prefix cyan-text"></i>
            <input type="text" id="inputIconEx2" class="form-control" name="location" value={this.state.location} className="name" onChange={this.handleChange} />
            <label for="inputIconEx2" className='form_label'> </label>
          </div>


          <div class="md-form">
            <i class="far fa-address-book fa-xm prefix cyan-text"></i>
            <input type="text" id="inputIconEx2" class="form-control" name="joined" value={this.state.joined} className="name" onChange={this.handleChange} />
            <label htmlFor="inputIconEx2" className='form_label'></label>
          </div>

          <div class="md-form">
            <i class="far fa-address-book fa-xm prefix cyan-text"></i>
            <input type="text" id="inputIconEx2" class="form-control" name="approve" value={this.state.approve} className="name" onChange={this.handleChange} />
            <label htmlFor="inputIconEx2" className='form_label'></label>
          </div>

          <button className="btn blue-gradient">Update</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  editUser: editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);