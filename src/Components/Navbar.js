import React from "react";

function Navbar() {
    return (
      <>
        <nav class="navbar navbar-expand-sm navbar-light bg-white">
          <div>
            <a class="navbar-brand" href="#">
              <img src={logo} alt="Blocket logo" style={{ width: "120px" }} />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <banner className="h-100">
          <div
            className="text-bg-danger row align-items-center"
            style={{
              height: "120px",
              paddingLeft: "40px",
            }}
          >
            Marketplace UI!
          </div>
        </banner>
      </>
    );
  }
  
  export default Navbar;