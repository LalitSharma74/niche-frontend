import "./Navbar.scss";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import pp from "../../images/pp.jpg";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

  // we are now trigger this effect using useEffect on Scroll
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">niche</span>
          {/* </Link> */}

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Niche Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}

          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={pp} alt="" />
              <span>{currentUser?.username}</span>

              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}

                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr />

          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
