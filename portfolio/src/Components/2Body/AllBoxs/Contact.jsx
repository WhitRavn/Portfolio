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
        <form className="form" action="" method="post">
          <label for="object">Objet </label>
          <input type="name" id="object" />
          <label for="object">Name </label>
          <input type="name" id="name" />
          <label for="object">Mail </label>
          <input type="name" id="mail" />
        </form>
      </div>
    );
  }
}
