import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-3 bg-black text-white" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Expense Tracker</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/edit">Edit</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/report">Report</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
      

      <Link className="navbar-nav me-auto mb-2 mb-lg-0" to='/'>Home</Link>
      <Link className="navbar-nav me-auto mb-2 mb-lg-0" to='/edit'>Edits</Link>
      <Link className="navbar-nav me-auto mb-2 mb-lg-0" to='/report'>Reports</Link>

    
  </nav> */}