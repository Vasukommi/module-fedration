import Form from "uiComponents/ContactForm";
import InfoCard from "uiComponents/infoCard";
import React from "react";
import "./form.css";

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <Form className="contact-form" />
            <InfoCard
                title="Title"
                subtitle="Subtitle"
                content="Some random content goes here"
            />
        </div>
    );
};

export default ContactUs;
