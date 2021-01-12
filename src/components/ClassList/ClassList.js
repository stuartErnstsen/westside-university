import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({students: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    const studentList = this.state.students.map((e, i) => <Link key={i} to={`/student/${e.id}`}><h3>{e.first_name} {e.last_name}</h3></Link> )
    return (
      <div className="box">
        <button onClick={this.props.history.goBack}>BACK TO HOME</button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}