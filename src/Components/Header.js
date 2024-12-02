import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"; 

function Header() {
 
  return (
    <body className="header-juspay" >
    <div className="header-container-juspay" >
      {/* Grid Overlay with Lines */}
      <div className="grid-overlay"></div>
       {/* Circles replacing ellipses */}
       <div className="circle1"></div> {/* First circle */}
       <div className="ellipse1"></div> {/* Second circle */}

      {/* Half Ellipse */}
      <div className="half-ellipse"></div>

      {/* Header Content */}
      <header className="header-juspay">
      <Link to="/dashboard" className="link-button">
          <button className="button">
            <span className="button-text">ASSIGNMENT</span>
          </button>
        </Link>
        <div className="company-name" >COMPANY</div>
        <h1 className="header-title">UI DEVELOPER ASSIGNMENT</h1>
      </header>
      <div className="company-details">
        Juspay Technologies Private Limited
      </div>
      {/* <div className="ellipse1"></div> */}
    </div>
    </body>
  );
}

export default Header;
