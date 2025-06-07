
import React from 'react';


function GallerySmall({images}){

    return (
        <div className="gallerySmall contentSpacing contentPadding">
            <div className="gallerySmall__bgShape1 bgShape"></div>
            <div className="gallerySmall__bgShape2 bgShape"></div>
            <div className="gallerySmall__inner">
            {images &&
                  images.map((image, index) =><div className="gallerySmall__imgContainer" key={index}> <img src={image} className='gallerySmall__img' /> </div>)} 
            </div>
        </div>
    )
}

export default GallerySmall;