import React from 'react';

const SingleFeature = ({ title, text, icon }) => {
    return (
        <div className="feature">
            <img src={icon} className="feature__logo" alt="underwear" />
            <h4 className="feature__title">{title}</h4>
            <p className="feature__text">{text}</p>
        </div>
    )
}

export default SingleFeature;
