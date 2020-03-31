import React, { useState } from 'react';

export const Card = ({ img, title, category, link }) => {

    const [liked, setLike] = useState(false);

    return (
        <div className="card">
            <a href={link} target="_blank" className="card__image" >
                <img src={img} alt="lingerie" />
            </a>
            <i className={`fas fa-heart ${liked && "liked"}`} onClick={() => setLike( !liked )}></i>
            <h5 className="card__title">{title}</h5>
            <div className="card__category">
                <i className="fas fa-list"></i> 
                <p className="name">{category}</p>
            </div>
            <div className="card__eco">
                <i className="fas fa-leaf"></i> 
                <p className="name">100% natural</p>
            </div>
            {/* <button className="btn white">
                <a href="" target="_blank">
                    Watch it!
                </a>
            </button> */}
        </div>
    )
}
