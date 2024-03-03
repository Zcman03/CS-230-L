import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react'

function NavbarComponent() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">
          <a className="navbar-brand" href="#home" >NavBar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#action/3.1">Action</a>
                  <a className="dropdown-item" href="#action/3.2">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#action/3.3">Something</a>
                </div>
              </li>
            </ul>
            <div class="m-auto"> </div>
            <ul class="d-flex justify-content-center">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavbarComponent;