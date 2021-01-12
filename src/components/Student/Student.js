import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      student: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => this.setState({student: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    const {first_name, last_name, grade, email} = this.state.student
    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <button onClick={this.props.history.goBack}>BACK TO LIST</button>
      </div>
    )
  }
}