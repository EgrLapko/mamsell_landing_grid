import React from 'react'
import { Card } from './Card';

export const Products = () => {

    const img1 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Fbras%2Fbras_bralettes%2F17_lace_bralette%2Fsmall%2F2.jpg?alt=media&token=de9b8ee6-ef94-420d-b70c-26f64fae0f61"
    const img2 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Fpanties%2Fpanties_slimming%2F9_tulle_shape_panty%2Fsmall%2F2.jpg?alt=media&token=baf32d64-874d-4ebb-b5e8-abd037ba71b0"
    const img3 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Faccs%2Faccs_tights_leggins%2F10_stand_up_tights%2Fsmall%2F2.jpg?alt=media&token=0d41ecac-e864-4dbc-8756-8334b2187e2c"
    const img4 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Faccs%2Faccs_bodysuits%2F4_floral_lace_body%2Fsmall%2F2.jpg?alt=media&token=edbfe78b-7f96-4caa-a18e-bfa772410114"
    const img5 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Fsleepwear%2Fsleep_nightgowns%2F9_classic_printed_mini_camsole%2Fsmall%2F2.jpg?alt=media&token=13244d84-544e-4fc4-8511-67652023d9f3"
    const img6 = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/items_database%2Faccs%2Faccs_other%2F15_fringed_scarf%2Fsmall%2F2.jpg?alt=media&token=b43cded5-70c1-4a09-b2db-911c161ef17a"

    return (
        <div className="cards-container">
            <Card img={img1} title="Beautiful Bras" category="Bralettes" link="https://petite-mamsell.netlify.com/products/bras_bralettes" />
            <Card img={img2} title="Comfortables Panties" category="Slimming panties" link="https://petite-mamsell.netlify.com/products/panties_slimming"/>
            <Card img={img3} title="Gorgeous tights" category="Tights" link="https://petite-mamsell.netlify.com/products/accessories_tights" />
            <Card img={img4} title="Beautiful bodysuits" category="Bodysuits" link="https://petite-mamsell.netlify.com/products/accessories_bodysuits" />
            <Card img={img5} title="Dream-like pajamas" category="Nightgowns" link="https://petite-mamsell.netlify.com/products/sleepwear_nightgowns" />
            <Card img={img6} title="And other cool stuff" category="Other" link="https://petite-mamsell.netlify.com/products/accessories_other" />
        </div>
    )
}
