import React from 'react'

const StoryImages = () => {

    const img1 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Fbras%2Fbras_pushup%2F16_floral_lace_and_tulle_pushup_bra%2F2.jpg?alt=media&token=548b963e-70b6-408c-9f6c-822946f30f0b";
    const img2 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Fsleepwear%2Fsleep_robes%2F2_silky_printed_robe%2Fsmall%2F2.jpg?alt=media&token=c5b487cd-d9b9-4b0f-99e4-6a0822f6256c";

    return (
        <div className="story-images">
            <img className="story-images__img--1" alt="bra" src={img2}/>
            <img className="story-images__img--2" alt="robe" src={img1}/>
        </div>
    )
}

export default StoryImages;
