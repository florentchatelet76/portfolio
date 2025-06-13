import React from "react";

function List({title,text,text2, list}) {
  return (
    <div className="ListContainer p-primColor">
        <h2 className="TitleH2">{title}</h2>
        <p className="p-primColor mg-t-16">{text}</p>
        <ul className="mg-t-32">
            {list.map((listItem, index) => (
                <li key={index} className=""><div className="listDot"></div><p className="">{listItem}</p></li>
            ))}
        </ul>
        <p className="p-primColor mg-t-32">{text2}</p>
    </div>
  );
}

export default List;
