import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className=''>
        <div className="footer">
          <div className="col-1">
            <h3>UESFUL LINK</h3>
            <a href="/home">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="col-2">
            <h3>NEWSLETTER</h3>
            <form>
              <input type="text" placeholder="Your Email Address" required />
              <br />
              <button type="submit">SUBSCRIB NOW</button>
            </form>
          </div>
          <div className="col-3">
            <h3>CONTACT</h3>
            <p>777, Jel Road, PK 3 Dinajpur,Birgonj</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;