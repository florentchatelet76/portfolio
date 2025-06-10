
import React from 'react';


function CenteredText({text}){

    return (
        <div className="centeredText contentSpacing contentPadding textBlock">
            <p className="p-primColor">{text}</p>
        </div>
    )
}

export default CenteredText;