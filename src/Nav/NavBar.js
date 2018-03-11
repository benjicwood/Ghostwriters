import React from 'react';
// import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './navbar.css';


class NavBar extends React.Component {
    render () {
        return (
        <div>
          <div className="nav">
      <ul>
        <li className="home"><a href="#">Home</a></li>
        <li className="tutorials"><a className="active" href="#">Tutorials</a></li>
        <li className="about"><a href="#">About</a></li>
        <li className="news"><a href="#">Newsletter</a></li>
        <li className="contact"><a href="#">Contact</a></li>
      </ul>
    </div>
      </div>
        )
    }
}


/*
<li><Link to='/home'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/news'>News</Link></li>
<li><Link to='/events'>Events</Link></li>
<li><Link to='/videos'>Videos</Link></li>
<li><Link to='/shop'>Shop</Link></li>
<li><Link to='/contact'>Contact</Link></li>
*/

const navPosition = {
    width: '120px',
    borderBottom: 'none',
    height: '50px',
    lineHeight: '50px',
    display: 'inline-block',
    marginLeft: '-4px'
};

export default NavBar;