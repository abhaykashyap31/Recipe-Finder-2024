import React from 'react';
import "./new.css";

function Footer() {
  return (
    <div><footer>
    <p>© 2024 Your Company. All rights reserved.</p>
    <nav>
      <a href="#about">About</a> | 
      <a href="#contact">Contact</a> | 
      <a href="#privacy">Privacy Policy</a>
    </nav>
    <button className="submit-review-button">Submit Review</button>
    </footer></div>
  )
}

export default Footer