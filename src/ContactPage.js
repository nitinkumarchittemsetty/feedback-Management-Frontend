import React from 'react';
import './ContactPage.css'; // Make sure to include your styles

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <h2>Postal Address</h2>
        <div className="address">
          <strong>Official Communication</strong>
          <p>KLEF Deemed to be University,<br />
          Admin. Office, 29-36-38, Museum Road,<br />
          Governorpet, Vijayawada. A.P., India.<br />
          Pincode: 520 002.</p>
        </div>
        <div className="address">
          <strong>Campus</strong>
          <p>KLEF Deemed to be University,<br />
          Green Fields, Vaddeswaram,<br />
          Guntur District, A.P., INDIA.<br />
          Pincode: 522 302.</p>
        </div>

        <h2>Phone Number</h2>
        <div className="phone-numbers">
          <p><strong>Administrative Office (Vijayawada):</strong> 0866 - 3500122</p>
          <p><strong>Campus (Vijayawada):</strong> 08645 - 350200</p>
          <p><strong>Administrative Office (Hyderabad):</strong> 040 - 35045035</p>
          <p><strong>Campus (Hyderabad):</strong> 040 - 35045055</p>
        </div>

        <h2>Fax Number</h2>
        <p><strong>Campus:</strong> 0863-2388999</p>

        <h2>E-Mail</h2>
        <p><strong>Campus (Hyderabad):</strong> reach@klh.edu.in</p>
      </div>
    </div>
  );
};

export default ContactPage;
