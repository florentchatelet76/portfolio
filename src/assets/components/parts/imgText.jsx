import React from "react";

function ImgText({image, text, title, flexRow }) {
  return (
    <div className={`imageText contentSpacing contentPadding p-primColor ${flexRow == true ? "" : "rowReverse"}`}>
      {image != "" && (
        <div className="imageText__imgContainer">
          <img className="imageText__img" src={image} alt="" />
        </div>
      )}
      {text != "" && (
        <div className="imageText__textContainer">
          {title != "" && (
            <div>
              <h2 className="TitleH2">{title}</h2>
              <p className="imageText__text">{text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImgText;
