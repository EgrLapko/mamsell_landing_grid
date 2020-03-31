import React from 'react';

import bbc from '../../images/logos/bbc.png'
import forbes from '../../images/logos/forbes.png'
import guardian from '../../images/logos/guardian.png'
import wall from '../../images/logos/wall.png'
import petiteMamsell from '../../images/logos/petiteMamsell.png'

import yehor from '../../images/founders/yehor.jpg'
import victoria from '../../images/founders/victoria.jpg'
import rodin from '../../images/founders/rodin.jpg'
import nastya from '../../images/founders/nastya.jpg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={petiteMamsell} alt="main-logo" className="header-left__logo" />
                <h3 className="subtitle"> ...your new lingerie </h3>
                <h1 className="main-title"> Hello, we are PM</h1>
                <button className="btn white">
                    <a href="https://petite-mamsell.netlify.com/" target="_blank">
                        Visit our website
                    </a>
                </button>
                <div className="header-left__seeon-text">See on</div>
                <div className="header-left__seeon-logos">
                    <img src={bbc} alt="see on logo 1" />
                    <img src={forbes} alt="see on logo 2" />
                    <img src={guardian} alt="see on logo 3" />
                    <img src={wall} alt="see on logo 4" />
                </div>
            </div>

            <div className="founders">
                <h3 className="founders__title">Our founders</h3>
                <div className="founders__list">
                    <img src={yehor} alt="Yehor Lapko" className="founders__img"/>
                    <div className="founders__details">
                        <h4 className="name">Yehor Lapko</h4>
                        <p className="role">Main founder</p>
                    </div>

                    <img src={victoria} alt="Victoria Gavriliuk" className="founders__img"/>
                    <div className="founders__details"> 
                        <h4 className="name">Victoria Gavriliuk</h4>
                        <p className="role">Main Advisor / Tester</p>
                    </div>

                    <img src={rodin} alt="Dmytro Rodin" className="founders__img"/>
                    <div className="founders__details">
                        <h4 className="name">Dmytro Rodin</h4>
                        <p className="role">Sceptic tester</p>
                    </div>

                    <img src={nastya} alt="Anastasia Medeckaya" className="founders__img"/>
                    <div className="founders__details">
                        <h4 className="name">Anastasia Medeckaya</h4>
                        <p className="role">Tester</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;