import React from "react";
import listingProjects from "../../../data/listingProjects";

function ImgFull({ image, legend }) {
  return (
    <div className=" contentSpacing">
      <div className="imgFullContainer ">
        <img className="imgFullContainer__img" src={image} alt="" />
      </div>
      {legend != "" && <p className="p-primColor textCenter mg-t-32">{legend}</p>}
    </div>
  );
}

export default ImgFull;
