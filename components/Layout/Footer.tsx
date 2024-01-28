import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="footer_title">
        <p>banda</p>
        <div className="title_icon_bg">
          <FaFacebook className="title_icon" />
          <FaInstagram className="title_icon" />
          <FaTwitter className="title_icon" />
        </div>
      </div>
      <div className="footer_content_bg">
        <div className="footer_content_child_bg">
          <h3>Company info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="footer_content_child_bg">
          <h3>Legal</h3>
          <p>About </p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="footer_content_child_bg">
          <h3>Features</h3>
          <p>Business Marketing </p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="footer_content_child_bg">
          <h3>Resources</h3>
          <p>IOS & Android </p>
          <p>Watch a Demo</p>
          <p>Live Chat</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className="contact_bg">
          <h3>Get in Touch</h3>
          <div className="input_bg">
            <input placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <h4>Lore imp sum dolor Amit</h4>
        </div>
      </div>
      <h5>Made With Love By Finland All Right Reserved</h5>
    </div>
  );
};

export default Footer;
