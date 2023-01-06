import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-section">
        <div className="contact-container">
          <h1>Contactez-moi</h1>
          <span class="material-symbols-outlined" id="mail-icon">
            mail
          </span>
          <p>Mon adresse email</p>
        </div>
        <div className="home-img"></div>
      </div>
    );
  }
}
