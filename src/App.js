import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';


export default class App extends Component {
  render() {
    return (
      
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link to='/'><div className='links'>Home</div></Link>
              <Link to='/about'><div className='links'>About</div></Link> 
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}