import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-items">
          <div className="col-1">
            <h4>UESFUL LINK</h4>
            <a href="/home">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="col-2">
            <h4>NEWSLETTER</h4>
            <form>
              <input type="text" placeholder="Your Email Address" required />
              <br />
              <button type="submit">SUBSCRIB NOW</button>
            </form>
          </div>
          <div className="col-3">
            <h4>CONTACT</h4>
            <p>777, Jel Road, PK 3 Dinajpur,Birgonj</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;