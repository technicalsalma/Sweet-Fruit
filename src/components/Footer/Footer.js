import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate();
  const handleAddInventory = () => {
    navigate("/addinventory");
  };

    return (
      <div className="footer">
        <div className="footer-items">
          <div className="col-1">
            <div className="d-flex">
              <h6>UESFUL-</h6>
              <h6>LINK</h6>
            </div>
            <a href="/home">Home</a>
            <a href="/myitems">MyItems</a>
            <a href="/addinventory">AddItems</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="col-5">
            <h6>CONTACT</h6>
            <p>777, Jel Road, PK 3 Dinajpur,Birgonj</p>
          </div>

          <div className="col-5">
            <h5 className="click-here">Click here</h5>

            <button className="manage" onClick={handleAddInventory}>
              Add New Item
            </button>
            <button
              onClick={() => navigate("/manageitems")}
              type="button"
              className="manage"
            >
              All-manag-item
            </button>
          </div>
        </div>
      </div>
    );
};

export default Footer;