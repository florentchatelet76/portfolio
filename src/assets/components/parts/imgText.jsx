
import React from 'react';


function ImageText({image, text}){

    return (
        <div className="imageText contentSpacing contentPadding">
            {image != '' &&(
                    <div className="imageText__imgContainer">
                    <img className='imageText__img' src={image} alt="" />
                    </div>)}
            {text != '' &&(
            <div className="imageText__textContainer">
            <p className="imageText__text">{text}</p>
            </div>)}                    

        </div>
    )
}

export default ImageText;