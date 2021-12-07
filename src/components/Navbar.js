import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  
  render() {

    return (
        <ul id="nav">
          <li class="navlink"><Link to="/"><img src="/work.png" alt="work"/><p>projects</p></Link></li>
          <li class="navlink"><Link to="/about"><img src="/about.png" alt="about"/><p>about</p></Link></li>
          {/* <li class="navlink"><Link to="/contact"><img src="/contact.png" alt="contact"/><p>contact</p></Link></li> */}
          <li class="navlink"><a href="mailto:alisa.su97@gmail.com"><img src="/contact.png" alt="contact"/><p>contact</p></a></li>
        </ul>
    );
  }
}

export default Navbar;