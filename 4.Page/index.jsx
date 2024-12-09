import React from "react";
import image from "./image.svg";
import kirito1 from "./kirito-1.png";
import maskGroup from "./mask-group.png";
import "./style.css";
import vector1 from "./vector-1.svg";
import vector from "./vector.svg";

export const IphoneSe = () => {
  return (
    <div className="iphone-SE">
      <div className="div">
        <div className="text-wrapper">AQUILAGUS</div>

        <img className="kirito" alt="Kirito" src={kirito1} />

        <div className="overlap">
          <img className="vector" alt="Vector" src={vector} />

          <img className="img" alt="Vector" src={image} />

          <img className="vector-2" alt="Vector" src={vector1} />
        </div>

        <div className="text-wrapper-2">Ps:</div>

        <div className="text-wrapper-3">Enjoy making Edits.</div>

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
