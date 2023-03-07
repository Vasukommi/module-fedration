import React from "react";

const ContactForm = ({ className }) => {
  return (
    <form className={className}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" rows="4" />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
