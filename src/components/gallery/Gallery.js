import React from 'react';

import img1 from '../../images/gallery/1.jpg'
import img2 from '../../images/gallery/2.jpg'
import img3 from '../../images/gallery/3.png'
import img4 from '../../images/gallery/4.jpg'
import img5 from '../../images/gallery/5.jpg'
import img6 from '../../images/gallery/6.jpg'
import img7 from '../../images/gallery/7.jpg'
import img8 from '../../images/gallery/8.jpg'
import img9 from '../../images/gallery/9.jpg'
import img10 from '../../images/gallery/10.jpg'
import img11 from '../../images/gallery/11.jpg'
import img12 from '../../images/gallery/12.jpg'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery__item gallery__item--1">
                <img className="gallery__image" src={img1} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--2">
                <img className="gallery__image" src={img2} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--3">
                <img className="gallery__image" src={img3} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--4">
                <img className="gallery__image" src={img4} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--5">
                <img className="gallery__image" src={img5} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--6">
                <img className="gallery__image" src={img6} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--7">
                <img className="gallery__image" src={img7} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--8">
                <img className="gallery__image" src={img8} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--9">
                <img className="gallery__image" src={img9} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--10">
                <img className="gallery__image" src={img10} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--11">
                <img className="gallery__image" src={img11} alt="gallery-element" />
            </div>
            <div className="gallery__item gallery__item--12">
                <img className="gallery__image" src={img12} alt="gallery-element" />
            </div>
        </div>
    )
}

export default Gallery;
