
import React from 'react';


function Paragraph({title, text}){

    return (
        <div className="paragraph contentSpacing contentPadding textBlock">
            {title != '' &&(
            <h2 className='TitleH2'>{title}</h2>)}
            <p className="textTitleSpacing ">paragraphe : {text}</p>
        </div>
    )
}

export default Paragraph;