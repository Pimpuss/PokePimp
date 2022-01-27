import React from "react";

const Characters = ({id, image, name, type }) => {
    const style = type + " thumb-container ";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <div className="imgContainer"><img src={image} alt={name} /></div>
            <div className="detail-wrapper">
                <h3 className="characterName">{name}</h3>
                <small>Type : {type}</small>
            </div>
        </div>
    )
}

export default Characters