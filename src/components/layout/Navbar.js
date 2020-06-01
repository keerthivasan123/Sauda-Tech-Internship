import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" style={{color: "white"}}>Sauda Tech</a>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
    </nav>
  );
};
export default Navbar;