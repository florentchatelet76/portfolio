import React, { useState } from "react";
import contactData from "../../data/contactData";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      fetch("/api/contact.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
      })
      .then((res) => res.text())
      .then((data) => {
        setResponseMessage(data);
        setFormData({ name: "", email: "", message: "" });
        console.log("data mail : "+data)
      })
      .catch((err) => {
        console.error("Erreur : ", err);
        setResponseMessage("Erreur lors de l'envoi.");
      });

  };

  return (
    <div className="contactContainer contentSpacing">

    <div className="contactInfos">
      <div className="contactInfos__inner socials">
        <div className="socials__inner">
          {contactData.map((icon, index) => (
            <a href={icon.link} key={index} target="_blank"  className=""><div className="socials__link"><img src={icon.media} alt="" /></div></a>
          ))}
          
        </div>
        <div className="socials__rect"></div>
      </div>
    </div>
    
    <div className="contact  p-primColor">
      <h2 className="TitleH2">Me contacter</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__textZone">
          <label className="contact__label">
            Nom :
            <input
              className="contact__name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="contact__textZone">
          <label className="contact__label">
            Email :
            <input
              className="contact__email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="contact__textZone">
          <label className="contact__label">
            Message :
            <textarea
              className="contact__message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit" className="primaryButton">
          Envoyer
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
    </div>
  );
};

export default ContactForm;
