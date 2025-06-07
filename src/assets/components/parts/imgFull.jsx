
import React from 'react';
import listingProjects from '../../../data/listingProjects';

function ImgFull({image}){

    return (
        <div className="imgFullContainer contentSpacing ">
                <img className='imgFullContainer__img' src={image} alt="" />
        </div>
    )
}

export default ImgFull;