import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
 


export default function Navbar(props) {
  return ( 
    <nav className={`navbar fixed-top navbar-expand-lg navbar navbar-dark bg-dark `}>
      <div className="container-fluid">
        <Link className="navbar-brand aria-disabled" to="/">Designed by Milan Rajani</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
            <li className="nav-item"><Link to="/business" className="nav-link " >Business</Link></li>
            <li className="nav-item"><Link to="/Entertainment" className="nav-link " >Entertainment</Link></li>
            <li className="nav-item"><Link to="/General" className="nav-link " >General</Link></li>
            <li className="nav-item"><Link to="/Health" className="nav-link " >Health</Link></li>
            <li className="nav-item"><Link to="/Science" className="nav-link " >Science</Link></li>
            <li className="nav-item"><Link to="/Sports" className="nav-link " >Sports</Link></li>
            <li className="nav-item"><Link to="/Technology" className="nav-link " >Technology</Link></li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  Homes: PropTypes.string
}

