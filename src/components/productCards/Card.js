import React from 'react';

export const Card = ({ img, title, category }) => {
    return (
        <div className="card">
            <img src={img} alt="lingerie" />
            <i className="fas fa-heart"></i>
            <h5 className="card__title">{title}</h5>
            <div className="card__category">
                <i className="fas fa-map-marker-alt"></i>
                <p className="category__name">{category}</p>
            </div>
            <button className="btn">Watch it</button>
        </div>
    )
}
