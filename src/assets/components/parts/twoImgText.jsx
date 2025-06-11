import React from "react";

function TwoImgText({ image1, image2, text, title, flexRow }) {
  return (
    <div className="twoImageTextContainer contentSpacing contentPadding p-primColor">
      <div
        className={`imageText  ${
          flexRow == true ? "" : "rowReverse"
        }`}
      >
        {image1 != "" && (
          <div className="imageText__imgContainer">
            <img className="imageText__img" src={image1} alt="" />
          </div>
        )}
        {image2 != "" && (
          <div className="imageText__imgContainer">
            <img className="imageText__img" src={image2} alt="" />
          </div>
        )}
      </div>
      {text != "" && (
        <div className="imageText__textContainer">
          
            <div className="imageText__textContainerInner">
              {title != "" && (
              <h2 className="TitleH2">{title}</h2>
              )}
              <p className="imageText__text">{text}</p>
            </div>
          
        </div>
      )}
    </div>
  );
}

export default TwoImgText;
