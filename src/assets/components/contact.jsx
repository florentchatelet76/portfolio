import React, { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const recaptchaWidgetId = useRef(null);
  const recaptchaToken = useRef("");

  useEffect(() => {
    // Charger le script reCAPTCHA une seule fois
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        // Render du widget reCAPTCHA invisible
        recaptchaWidgetId.current = window.grecaptcha.render("recaptcha-container", {
          sitekey: "6LeMDlsrAAAAAPiG48RvFXLw79p1Xb58CXgvmYO8",
          size: "invisible",
          callback: (token) => {
            recaptchaToken.current = token;
            submitForm(token);
          }
        });
        setRecaptchaReady(true);
      }
    };

    return () => {
      // Clean up si nécessaire
      if (recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoi du formulaire après réception du token reCAPTCHA
  const submitForm = (token) => {
    const dataToSend = { ...formData, recaptchaToken: token };

    fetch("/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.text())
      .then((data) => {
        setResponseMessage(data);
        setFormData({ name: "", email: "", message: "" });
        recaptchaToken.current = "";
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      })
      .catch((err) => {
        console.error("Erreur : ", err);
        setResponseMessage("Erreur lors de l'envoi.");
      });
  };

  // Au submit, on déclenche le reCAPTCHA invisible
const handleSubmit = (e) => {
  e.preventDefault();
  if (!recaptchaReady) {
    setResponseMessage("Le reCAPTCHA se charge, veuillez patienter...");
    return;
  }
  if (window.grecaptcha && recaptchaWidgetId.current !== null) {
    window.grecaptcha.execute(recaptchaWidgetId.current);
  } else {
    setResponseMessage("reCAPTCHA non chargé, veuillez réessayer.");
  }
};

  return (
    <div className="contact contentSpacing p-primColor">
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

        {/* Conteneur pour le reCAPTCHA invisible */}
        <div id="recaptcha-container"></div>

        <button type="submit" className="primaryButton">
          Envoyer
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
