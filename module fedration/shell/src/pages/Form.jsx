// Parent component
import React from "react";
import ContactForm from "uiComponents/ContactForm";
import InfoCard from "uiComponents/infoCard";
import Header from "../components/header/header.jsx";
import "./Forms.css";

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="contact-us">
                <h1>Contact Us</h1>
                <ContactForm className="contact-form" />
                <InfoCard
                    title="Title 2"
                    subtitle="Subtitle 2"
                    content="Some random content goes here 2"
                />
            </div>
        </>
    );
};

export default ContactUs;