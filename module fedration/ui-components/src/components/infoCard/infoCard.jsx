import React from "react";

const infoCard = ({ title, subtitle, content }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default infoCard;
