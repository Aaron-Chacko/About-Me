import React from "react";
import image from "./image.svg";
import maskGroup from "./mask-group.png";
import messi21 from "./messi2-1.png";
import "./style.css";
import vector1 from "./vector-1.svg";
import vector from "./vector.svg";

export const IphoneSe = () => {
  return (
    <div className="iphone-SE">
      <div className="div">
        <div className="overlap">
          <img className="vector" alt="Vector" src={vector} />

          <img className="img" alt="Vector" src={image} />

          <img className="vector-2" alt="Vector" src={vector1} />
        </div>

        <div className="text-wrapper">AQUILAGUS</div>

        <img className="messi" alt="Messi" src={messi21} />

        <div className="text-wrapper-2">Messi</div>

        <div className="text-wrapper-3">Coz why not</div>

        <img className="mask-group" alt="Mask group" src={maskGroup} />

        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-4">Add a Comment...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
