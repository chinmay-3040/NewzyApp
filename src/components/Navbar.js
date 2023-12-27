import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'


export class Navbar extends Component {

    
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'lightgrey' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general" style={{ color: 'black' ,fontFamily: 'Montserrat, sans-serif' }}><b>Newzy</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/general" style={{ color: 'black'}}>Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/entertainment">Entertainment</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/general">General</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="/technology">Technology</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" style={{ color: 'black'}} to="./WeatherApp/index.html">Technology</Link></li> */}
                   
                </ul>

        


            
               
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default Navbar

