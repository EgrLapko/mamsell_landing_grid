import React from 'react';

import underwear from '../../images/underwear.svg';
import bra from '../../images/bra.svg';
import panty from '../../images/panty.svg';
import robe from '../../images/robe.svg';
import bodysuit from '../../images/bodysuit.svg';
import socks from '../../images/socks.svg';

import SingleFeature from './SingleFeature';

export const Features = () => {
    return (
        <section className="features">
            <SingleFeature 
                icon={underwear} 
                title="Underwear Title" 
                text="Our underwear is so good, just trust us. Made with 100% natural materials, it feels like a part of your skin." />
            <SingleFeature 
                icon={bra} 
                title="Bra Title" 
                text="Mamsell`s bra is a pure art. Because it seems cool and it feels great." />
            <SingleFeature 
                icon={panty} 
                title="Panty Title" 
                text="Made with eco materials, our panties are fully recyclable and easy to get rid off." />
            <SingleFeature 
                icon={robe} 
                title="Robes Title" 
                text="Our gorgeous robes will warm your body in the winter and fresh it in summer. Because it can breath. Because it`s you." />
            <SingleFeature 
                icon={bodysuit} 
                title="Bodysuit Title" 
                text="We can`t imagine Petite Mamsell without good bodysuit. We dont know why do you need them for. But you need them, right?" />
            <SingleFeature 
                icon={socks} 
                title="Socks Title" 
                text="Socks are life. Our socks - like life in a dream." />
        </section>
    )
}
