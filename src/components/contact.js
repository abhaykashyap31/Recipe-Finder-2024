import React from "react";
import './new2.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d5db640-8734-4a79-8068-cb4f98bb651b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <h1>CONTACT US</h1>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="input-container">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-container">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="textarea-container">
            <p className="Type">Type Message</p>
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            <FontAwesomeIcon icon={faPaperPlane} /> Submit
          </button>
        </form>
        {result && <span className="result-message">{result}</span>}
      </div>
    </div>
  );
}
