function NavbarComponent() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

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
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavbarComponent;