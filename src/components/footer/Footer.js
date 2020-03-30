import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__list-container">
                <h4 className="list-title">Bras</h4>
                <ul className="list">
                    <li className="list__item"><a href="">Classic</a></li>
                    <li className="list__item"><a href="">Push-up</a></li>
                    <li className="list__item"><a href="">Bralettes</a></li>
                    <li className="list__item"><a href="">Triangle</a></li>
                </ul>
            </div>

            <div className="footer__list-container">
                <h4 className="list-title">Panties</h4>
                <ul className="list">
                    <li className="list__item"><a href="">Classic</a></li>
                    <li className="list__item"><a href="">Thongs</a></li>
                    <li className="list__item"><a href="">Culottes</a></li>
                    <li className="list__item"><a href="">Slinnibg</a></li>
                </ul>
            </div>

            <div className="footer__list-container">
                <h4 className="list-title">Accessories</h4>
                <ul className="list">
                    <li className="list__item"><a href="">Tights</a></li>
                    <li className="list__item"><a href="">Bodysuits</a></li>
                    <li className="list__item"><a href="">Socks</a></li>
                    <li className="list__item"><a href="">Other</a></li>
                </ul>
            </div>

            <div className="footer__list-container">
                <h4 className="list-title">Sleepwear</h4>
                <ul className="list">
                    <li className="list__item"><a href="">Jumpsuits</a></li>
                    <li className="list__item"><a href="">Nightgowns</a></li>
                    <li className="list__item"><a href="">Robes</a></li>
                    <li className="list__item"><a href="">Short Pajamas</a></li>
                </ul>
            </div>
            <div className="footer__text">
                <p className="text">Here lies the Petite Mamsell`s landing page, built with CSS Grid, for the sake of a good practice. Made by Yehor Lapko in 2020</p>
            </div>
        </div>
    )
}

export default Footer;
