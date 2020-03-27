import React from 'react';

export const Card = ({ img, title, category }) => {
    return (
        <div className="card">
            <img className="card__image" src={img} alt="lingerie" />
            <i className="fas fa-heart"></i>
            <h5 className="card__title">{title}</h5>
            <div className="card__category">
                <i className="fas fa-list"></i> 
                <p className="name">{category}</p>
            </div>
            <div className="card__eco">
                <i class="fas fa-leaf"></i> 
                <p className="name">100% natural</p>
            </div>
            <button className="btn white">Watch it</button>
        </div>
    )
}
